<?php
$url = $_GET['url'] ?? '';
if (empty($url) || !filter_var($url, FILTER_VALIDATE_URL)) {
  http_response_code(400);
  echo 'Invalid or missing URL parameter.';
  exit;
}
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);
if (curl_errno($ch)) {
  http_response_code(500);
  echo 'cURL Error: ' . curl_error($ch);
  curl_close($ch);
  exit;
}
$headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $headerSize);
$body = substr($response, $headerSize);
$headersArray = explode("\r\n", $header);
foreach ($headersArray as $headerLine) {
  if (strpos($headerLine, ':') !== false) {
    list($name, $value) = explode(':', $headerLine, 2);
    $name = trim($name);
    $value = trim($value);
    if (preg_match('/^(content-type|content-length|content-range|accept-ranges|content-disposition)$/i', $name)) {
      header("$name: $value");
    }
  }
}
echo $body;
curl_close($ch);
?>
