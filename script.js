//your JS code here. If required.
     #line {
            position: relative;
            width: 200px;
            height: 2px;
            background-color: black;
            animation: rotate 2s linear infinite;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }