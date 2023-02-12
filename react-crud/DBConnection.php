<?php
class DBConnection {
    private $hostname = 'localhost';
    private $username = 'ahmed';
    private $password = '';
    private $database = 'react-crud';

    public function connect() {
        try {
              $conn = new PDO("mysql:host=$this->hostname;dbname=$this->database", $this->username, $this->password);
              $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
              return $conn;
        } catch(PDOException $e) {
              echo "Connection failed: " . $e->getMessage();
        }
    }
}


?>
