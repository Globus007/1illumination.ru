<?php header("Content-Type: text/html; charset=utf-8");?>
<?php
/* Устанавливаем e-mail адресата */
//$myemail = "pl@tehexim.ru";
$myemail = "g.stashinsky@gmail.com";

/* Осуществляем проверку вводимых данных и их защиту от враждебных
скриптов */
function getField($s){ // кодирует поля
    $s = substr((htmlspecialchars($_POST[$s])), 0 , 500);
    if (strlen($s)>1) return $s;
}

/* Проверяем заполнены ли поля ввода */
if ((strlen($_POST['name'])>2)&&((strlen($_POST['phone'])>5))){
    $name = getField("name");
    $btn = getField("btn");
//    $btn = iconv('windows-1251′', 'utf-8', getField("btn"));
//    $name = iconv('windows-1251′', 'utf-8', $name);
    $phone = getField("phone");

/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте!
Вашей контактной формой было отправлено сообщение!

Имя отправителя: $name
Телефон: $phone
Кнопка: $btn";

    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8";

    /* Отправляем сообщение, используя mail() функцию */
    $tema = "Leed from ".($_SERVER["HTTP_HOST"]);
    if (mail($myemail, $tema, $message_to_myemail, $headers)) {
        $result = "success";
        $cls = "c_success";
        $message = "Спасибо, сообщение отправлено";
    } else {
        $result = "error";
        $cls = "c_error";
        $message = "Ошибка отправки, попробуйте ещё раз";
    }
} else {
    $result = "error";
    $cls = "c_error";
    $message = "Заполните имя и номер телефона";
}

//$result = array(
//    'result' => $result,
//    'message' => $message
//);
//
//// Переводим массив в JSON
//echo json_encode($result);

echo "<p class='$result'> $message </p>";

?>
