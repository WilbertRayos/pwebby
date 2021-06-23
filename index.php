<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <link rel="stylesheet" type="text/css" href="css/nav.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

    <div id="main_wrapper">
        <!-- <header id="top_header">
            <?php require "header.php"?>
        </header> -->
        <nav id="menubar">
            <li><a href="#" id="index" onclick="wews()">Home</a></li>
            <li><a href="certificates.php">Certificates</a></li>
            <li><a href="downloads.php">downloads</a></li>
            <li><a href="contacts.php">contacts</a></li>
        </nav>
        <section id="main_section">
            <button type="button" id="btn_hide_nav" onclick="hide_navigation()">Hide Navigation</button>
            <article>
                <header>
                   <hgroup>
                       <h2>This is the article subtitle</h2>
                       <h3>wewews</h3>
                   </hgroup>
                </header>
                <p>Main article</p>
                <footer>
                    Article footer
                </footer>
            </article>
        </section>
        <aside id="side_section">
            This is sidebar
        </aside>
        <footer id="footer">
            This is footer
        </footer>
    </div>

    <script type="text/javascript">
        function wews(){
            $(document).ready(function(){
                $("#main_section").load("header.php");
            });
        }
        // document.getElementById("index").click(function(){
        //     alert(1);
        //     $(document).ready(function(){
        //         $("#main_section").css("backgroun-color","blue");
        //     });
        // });

    </script>
</body>
</html>
