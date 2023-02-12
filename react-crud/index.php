<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include './DBConnection.php';

// Instanciating DB Connection Class For Connection
$objDB = new DBConnection();
$conn = $objDB->connect();


$request_method = $_SERVER['REQUEST_METHOD'];
switch($request_method) {
    case 'GET':
        if(isset($_GET['id']) && is_numeric($_GET['id'])) {
            $id = intval($_GET['id']);
            echo json_encode( getSingleUserInfo($id) );
        }else{
            echo json_encode( getAllUsers() );
        }
        break;
    case 'POST':
        if(isset($_POST['id']) && is_numeric($_POST['id'])) {
            $id = intval($_POST['id']);
            echo json_encode( updateSingleUser($id) );
        }else{
            echo json_encode( createNewUser() );
        }
        break;
    case 'DELETE':
        $params = explode('=', file_get_contents('php://input'));
        $id = intval(end($params));
        if(isset($id) && is_numeric($id)) {
            echo json_encode( deleteUser($id) );
        }
        break;
}


// Create New User Function
function createNewUser() {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    global $conn;
    $stmt = $conn->prepare('INSERT INTO users(username, password, email) VALUES (?, ?, ?)');
    $stmt->execute([$username, $password, $email]);
    return 'User Inserted Successfully';
}

// Get All Users To Show In List
function getAllUsers() {
    global $conn;
    $stmt = $conn->prepare('SELECT id, username, email FROM users');
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);

}

// Get Single User Info Based On User ID
function getSingleUserInfo($id) {
    global $conn;
    $stmt = $conn->prepare('SELECT id, username, email, password FROM users WHERE id = ?');
    $stmt->execute([$id]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

// Update Single User Info Based On User ID
function updateSingleUser($id) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $oldhashedpassword = $_POST['password'];
    if(isset($_POST['newpassword']) && !empty($_POST['newpassword'])) {
        $password = md5($_POST['newpassword']);
    }else{
        $password = $oldhashedpassword;
    }

    global $conn;
    $stmt = $conn->prepare('UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?');
    $stmt->execute([$username, $password, $email, $id]);
    return 'User Updated Successfully';
}

// Delete Single User Based On User ID
function deleteUser($id) {
    global $conn;
    $stmt = $conn->prepare('DELETE FROM users WHERE id = ?');
    $stmt->execute([ $id]);
    return 'User Deleted Successfully';
}

?>
