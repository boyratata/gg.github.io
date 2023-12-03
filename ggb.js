<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha384-cykETKGcuKd0VBnbllkMPiL5x7dF72vqJQaV4QFFpA5C1tDfRSktQtkFY2XYbMNE" crossorigin="anonymous">
    <!-- Your other stylesheets go here -->
    <link rel="stylesheet" href="style.css">
    <style>
        /* Add your menu styles here */
        .menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .menu-content {
            text-align: center;
            color: white;
        }

        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            cursor: pointer;
            color: white;
            font-size: 20px;
        }
    </style>
    <title>gg.github.io,real</title>
</head>
<body>
     <button id="Discord">Open Discord</button>

    <script>
        // Add event listener to open Discord profile
        document.getElementById('openDiscord').addEventListener('click', function() {
            '<https://discord.com/users/962552468292648990>'
            window.open('<https://discord.com/users/962552468292648990>', '_blank');
        });

    <div class="menu" id="menu">
        <div class="menu-content">
            <span class="close-btn" id="closeMenu">&times;</span>
            <p>Menu Content Here</p>
        </div>
    </div>

    <script src="blackmountains.js"></script>
    <script>
        // Add event listener to open the menu
        document.getElementById('openMenu').addEventListener('click', function() {
            document.getElementById('menu').style.display = 'flex';
        });

        // Add event listener to close the menu
        document.getElementById('closeMenu').addEventListener('click', function() {
            document.getElementById('menu').style.display = 'none';
        });
    </script>
</body>
</html>
