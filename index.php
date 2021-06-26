<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" type="text/css" href="css/main.css" />
    <link rel="stylesheet" type="text/css" href="css/nav.css" />
    <link rel="stylesheet" type="text/css" href="css/footer.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body onload="go_home()">

    <div id="main_wrapper">
        <!-- <header id="top_header">
            <?php require "header.php"?>
        </header> -->
        <nav id="menubar">
            <li><a href="#" id="home" onclick="go_home()">Home</a></li>
            <li><a href="#" id="about" onclick="go_about()">About Me</a></li>
            <li><a href="#" id="certificates" onclick="go_certificates()">Certificates</a></li>
            <li><a href="#" id="contacts" onclick="go_contacts()">contacts</a></li>
        </nav>
        <section id="main_section">
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
        <!-- <aside id="side_section">
            This is sidebar
        </aside> -->

    </div>
    <footer id="footer">
            <?php require "footer.php"?>
        </footer>
    <script type="text/javascript">



    </script>
</body>
</html>
