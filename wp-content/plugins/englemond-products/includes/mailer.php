<?php
/**
 * Mailer handler for contact form submissions
 *
 * @package EnglemondProducts
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Handle contact form submission via AJAX
 */
function englemond_contact_form_submit() {
	// Verify nonce
	if (!isset($_POST['contact_form_nonce']) || !wp_verify_nonce($_POST['contact_form_nonce'], 'englemond_contact_form')) {
		wp_send_json_error([
			'message' => __('Security check failed. Please refresh the page and try again.', 'englemond-products'),
		]);
		return;
	}

	// Sanitize and validate form data
	$name = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
	$email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
	$subject = isset($_POST['subject']) ? sanitize_text_field($_POST['subject']) : '';
	$message = isset($_POST['message']) ? substr(sanitize_textarea_field($_POST['message']), 0, 4000) : '';
	$message = nl2br(strip_tags($message));
	$contact_email = isset($_POST['contact_email']) ? sanitize_email($_POST['contact_email']) : '';
	// Validate required fields
	if (empty($name) || empty($email) || empty($subject) || empty($message)) {
		wp_send_json_error([
			'message' => __('Please fill in all required fields.', 'englemond-products'),
		]);
		return;
	}

	

	// Validate email format
	if (!is_email($email)) {
		wp_send_json_error([
			'message' => __('Please enter a valid email address.', 'englemond-products'),
		]);
		return;
	}

	if ($msg = englemond_is_spam($email)) {
		$error_message = __('Too many requests. Please try again later. Last message was sent at %s', 'englemond-products');
		$error_message = sprintf($error_message, $msg['date']);
		wp_send_json_error([
			'message' => sprintf($error_message, $msg['date']),
		]);
		return;
	}
	
	$messages = get_option('englemond_contact_messages', []);
	$messages[] = $mail = [
		'id'=>md5(date('Y-m-d H:i:s').$name.$email.$subject.$message),
		'date'=>date('Y-m-d H:i:s'),
		'ip'=>$_SERVER['REMOTE_ADDR'],
		'user_agent'=>$_SERVER['HTTP_USER_AGENT'],
		'name' => $name,
		'status' => 'pending',
		'email' => $email,
		'subject' => $subject,
		'message' => $message,
	];
	$messages = array_slice($messages, -100); // Keep only last 100 messages
	update_option('englemond_contact_messages', $messages);
	

	// Get recipient email - use block-specific email or fall back to global settings
	$recipient_email = '';
	if (!empty($contact_email) && is_email($contact_email)) {
		$recipient_email = $contact_email;
	} else {
		$options = get_option('englemond_shop_settings', []);
		$recipient_email = isset($options['contactEmail']) && !empty($options['contactEmail']) 
			? $options['contactEmail'] 
			: get_option('admin_email');
	}

	// If no valid recipient email found, use admin email
	if (empty($recipient_email) || !is_email($recipient_email)) {
		$recipient_email = get_option('admin_email');
	}

	// Prepare email content
	$email_subject = sprintf(
		/* translators: %s: Site name */
		__('[%s] Contact Form: %s', 'englemond-products'),
		get_bloginfo('name'),
		$subject
	);

	$email_body = sprintf(
		/* translators: %1$s: Name, %2$s: Email, %3$s: Subject, %4$s: Message */
		__("Name: %1\$s\nEmail: %2\$s\nSubject: %3\$s\n\nMessage:\n%4\$s", 'englemond-products'),
		$name,
		$email,
		$subject,
		$message
	);

	// Set email headers
	$headers = [
		'Content-Type: text/plain; charset=UTF-8',
		'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
		'Reply-To: ' . $name . ' <' . $email . '>',
	];

	// Send email
	$mail_sent = wp_mail($recipient_email, $email_subject, $email_body, $headers);
	
	if ($mail_sent) {
		englemond_contact_message_update_status($mail['id'], 'sent');
		wp_send_json_success([
			'message' => __('Thank you! Your message has been sent.', 'englemond-products'),
		]);
	} else {
		englemond_contact_message_update_status($mail['id'], 'error');
		wp_send_json_error([
			'message' => __('Sorry, there was an error sending your message. Please try again later.', 'englemond-products'),
		]);
	}
}

// Register AJAX actions for both logged-in and non-logged-in users
add_action('wp_ajax_englemond_contact_form_submit', 'englemond_contact_form_submit');
add_action('wp_ajax_nopriv_englemond_contact_form_submit', 'englemond_contact_form_submit');

function mailtrap($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
    $phpmailer->SMTPAuth = true;
    $phpmailer->Port = 2525;
    $phpmailer->Username = '6d47416af5b782';
    $phpmailer->Password = 'db0aa85cf5a0f1';
  }
  add_action('phpmailer_init', 'mailtrap');

function englemond_contact_message_update_status($id, $status) {
	$messages = get_option('englemond_contact_messages', []);
	foreach ($messages as $key => $message) {
		if ($message['id'] == $id) {
			$messages[$key]['status'] = $status;
			break;
		}
	}
	update_option('englemond_contact_messages', $messages);
}

function englemond_is_spam($email) {
	$messages = get_option('englemond_contact_messages', []);
	$now = new \DateTime();
	$now->modify('-10 minutes');
	$dateMin = $now->format('Y-m-d H:i:s');
	foreach ($messages as $message) {
		if ($message['email'] == $email) {
			if ($message['date'] > $dateMin) {
				return $message;
			}
		}
	}
	return false;
}