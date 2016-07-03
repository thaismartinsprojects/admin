<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="pt" ng-app="thaisMartins" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="pt" ng-app="thaisMartins" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="pt" ng-app="thaisMartins" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="pt" ng-app="thaisMartins" class="no-js"> <!--<![endif]-->
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8">
    <link href="public/images/favicon.ico" type="png" rel="shortcut icon">
    <title>Thais Martins - Desenvolvimento Web</title>
    <style type="text/css">
        .main {
            width: 800px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 0 auto;
            color: #29323d;
        }
        .main h1 {
            margin: 100px 0 50px 0;
            padding: 20px;
            background-color: #ffde00;
            text-align: center;
            text-transform: uppercase;
        }
        .main p {
            font-size: 16px;
        }
    </style>

</head>
<body>
    <div class="main">
        <h1>Contato do site</h1>
        <p><strong>Nome:</strong> <?php echo utf8_decode($name); ?></p>
        <p><strong>Telefone:</strong> <?php echo $phone; ?></p>
        <p><strong>Email:</strong> <?php echo $mail; ?></p>
        <p><strong>Mensagem:</strong> <?php echo utf8_decode($message); ?></p>
    </div>
</body>
</html>