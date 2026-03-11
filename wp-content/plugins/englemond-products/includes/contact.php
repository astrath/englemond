<?php 

add_action('admin_menu', 'englemond_contact_menu');
function englemond_contact_menu() {
	add_menu_page(
		__('Inbox', 'englemond-products'),
		__('Contact Inbox', 'englemond-products'),
		'edit_pages',
		'englemond-contact',
		'englemond_inbox_page',
		'dashicons-email-alt',
		25
	);
}

add_action('current_screen', 'englemond_contact_messages_bulk_action');
function englemond_contact_messages_bulk_action() {
	if (isset($_POST['action']) && $_POST['action'] == 'englemond_contact_messages_bulk_action' && current_user_can('edit_pages')) {
		if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'englemond_contact_messages_bulk_action')) {
			wp_die(__('Security check failed. Please refresh the page and try again.', 'englemond-products'));
		}
		$messageIds = explode(',', $_POST['mesageIds']);
        $messages = get_option('englemond_contact_messages', []);
        $messages = array_filter($messages, function($message) use ($messageIds) {
            return !in_array($message['id'], $messageIds);
        });
        update_option('englemond_contact_messages', $messages);
		wp_redirect(admin_url('admin.php?page=englemond-contact'));
		exit;
	}
}       

function englemond_inbox_page() {
    require_once __DIR__ . '/class-message-table-list.php';
    $list = new Message_Table_List();
    $list->prepare_items();
	include __DIR__ . '/inbox.php';
}
