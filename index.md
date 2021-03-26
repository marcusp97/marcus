<!DOCTYPE html>
<html>
    <head>
       <meta charset='UTF-8'>
       <meta name='viewport' content='width=device-width, initial-scale=1.0h'>
       <meta http-equiv='X-UA-Compatible' content='ie=edge'>
       <link rel="stylesheet" type="text/css" href="style.css">
       <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
       <title> Marcus.Tech</title>
    </head>

    <body>
         
        <div class='img-wrap'>
            <img src='images/la2.png' class='la2 translate' data-speed='0.6' alt=''>
            <img src='images/la.png' class='la translate' data-speed='0.2' alt=''>
        </div>
        
        <header>
            <nav class='fade-in'>
                <h1> I'm Marcus </h1>
                <p> A Traveling Self-Taught Developer from Los Angeles </p>
                <ul id='list'>
                    <li class='li1'><a href='#div_id' class='cool-link'> Projects </a></li>
                    <li class='li2'><a href='Resume.pdf' class='cool-link' download=""> Resume </a></li>
                    <li class='li3'><a href="https://github.com/marcusp97" target="_blank" class='cool-link'> Github </a></li>
                    <li class='li4'><a href='#id' class='cool-link'> Contact </a></li>
                </ul>
            </nav>      
        </header>

        <section class='projects'>
            <div class="shadow"></div>

            <div class="container">
                <div id='div_id' class="content opacity">
                    <h3 class="title">
                        Projects
                        <div class="border"></div>
                    </h3>
                    <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita sequi quisquam laboriosam temporibus exercitationem.</p>
                </div>

                <div class="imgContainer opacity">
                    <img src="images/doggo.jpg" alt="">
                </div>
            </div>
        </section>

        <section class='contact'> 
            <div id='id' class='contact-wrapper'>
                <div>
                    <h3 class='title2'> Contact 
                        <div class='border2'></div>
                    </h3>
                    <p class='text2'> Feel free to send me an email with this contact form: </p>
                </div>

                <form id="mail_form" action="mypost.php" method="POST">
                    <div>
                        <label for="subject">Subject:</label>
                        <input type="text" name="subject" id="subject"/>
                    </div>
                    <div>
                        <label for="message">Message:</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" id="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </section>

        <script src='app.js'> </script>
    </body> 
</html>
