![icon128](https://github.com/user-attachments/assets/b440b1b6-410d-460e-be3c-1662e2aea0a8)

# Website-Blocker
Website Blocker allows users to block specific websites and automatically disables access to the website or you can set it to redirects to a specific website when they attempt to access any blocked sites. Created by Daksh Prasad.

## Setup Instructions
1. Download ZIP, then unzip it
2. Go to [Chrome Extensions](chrome://extensions/) (chrome://extensions/)
3. Make sure 'Developer mode' is toggled on

![image](https://github.com/user-attachments/assets/b687fbe7-2d63-473a-bd3a-48de80c2765d)

4. Click on 'Load unpacked' and select 'Website-Blocker'

![image](https://github.com/user-attachments/assets/dec961da-c664-46ab-a1f1-33901c5580b7)

5. Click on the Website Blocker in the extension toolbar and type in a URL, make sure that 'https://' is included

6. Open up a New Tab and the following should appear

![image](https://github.com/user-attachments/assets/aef8222c-f007-4feb-81bf-b910ae51f288)



## Redirect to a specific website
1. Download [Visual Studio Code](https://code.visualstudio.com/download)
2. Once you have Visual Studio Code downloaded, click on 'File' then 'Open Folder'
3. Open the 'Website-Blocker' folder
4. Go to 'background.js' and on line 26, remove the // from the comment, the 'redirect: { url: "https://www.google.com" } },' should be left
5. You can change the URL you want, just make sure the 'https://' is included
6. Click on 'File' then 'Save All'
7. Go to [Chrome Extensions](chrome://extensions/) (chrome://extensions/)
8. Click the refresh button on 'Website Blocker'
