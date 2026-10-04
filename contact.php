<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Method not allowed.'); }

$client_email = 'info@naziasayyed.com';
$name = trim(strip_tags($_POST['name'] ?? ''));
$phone = trim(strip_tags($_POST['phone'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$project_type = trim(strip_tags($_POST['project_type'] ?? ''));
$description = trim(strip_tags($_POST['description'] ?? ''));
$budget = trim(strip_tags($_POST['budget'] ?? ''));
$timeline = trim(strip_tags($_POST['timeline'] ?? ''));
$source = trim(strip_tags($_POST['source'] ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $description === '') { http_response_code(400); exit('Please complete the required fields.'); }

$subject = 'New Website Enquiry — ' . $name;
$body = "New enquiry from Nazia Sayyed Studio website\n\n";
$body .= "Name: $name\nPhone: $phone\nEmail: $email\nProject Type: $project_type\n\n";
$body .= "Project Description:\n$description\n\nBudget: $budget\nTimeline: $timeline\nHow they heard about us: $source\n";
$headers = "From: noreply@naziasayyed.com\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";

if (mail($client_email, $subject, $body, $headers)) {
  header('Location: index.html?submitted=1#contact-us'); exit;
}
http_response_code(500); echo 'We could not send the enquiry right now. Please email info@naziasayyed.com directly.';
?>
