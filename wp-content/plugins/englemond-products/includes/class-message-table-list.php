<?php 

class Message_Table_List extends WP_List_Table {
    public function __construct() {
        parent::__construct([
            'singular' => 'message',
            'plural' => 'messages',
            'ajax' => true,
        ]);
        $this->_column_headers = $this->get_columns();
        
    }

    public function get_columns() {
        return [
            'name' => 'Name',
            'email' => 'Email',
            'subject' => 'Subject',
            'message' => 'Message',
        ];
    }

/*    public function get_column_info() {
        dd(parent::get_column_info());
    }*/

    public function get_sortable_columns() {
        return [
            'name' => 'name',
            'email' => 'email',
            'subject' => 'subject',
            'message' => 'message',
        ];
    }
    public function has_items() {
        return !empty($this->items);
    }

    public function inline_edit() {
        return '<div class="inline-edit-row"><fieldset class="inline-edit-col-left"><div class="inline-edit-col"><label><span class="title">Name</span><input type="text" name="name" value="" /></label></div></fieldset></div>';
    }
    public function search_box($text, $input_id) {
        return '<p class="search-box"><label class="screen-reader-text" for="' . $input_id . '">' . $text . ':</label><input type="search" id="' . $input_id . '" name="s" value="' . esc_attr($this->get_search_query()) . '" /></p>';
    }
    public function get_search_query() {
        return isset($_GET['s']) ? sanitize_text_field($_GET['s']) : '';
    }

    public function prepare_items() {
        $this->items = get_option('englemond_contact_messages', []);
        $this->set_pagination_args([
            'total_items' => count($this->items),
            'per_page' => 10,
            'total_pages' => ceil(count($this->items) / 10),
        ]);
    }
    public function column_name($item) {
        return $item['name'];
    }
    public function column_email($item) {
        return $item['email'];
    }
    public function column_subject($item) {
        return $item['subject'];
    }
    public function column_message($item) {
        return $item['message'];
    }
    public function column_default($item, $column_name) {
        return $item[$column_name];
    }
}