// let baseURL = 'http://localhost:3001/';
baseURL  = 'https://chat-bot-backend-arun.herokuapp.com/'
//sghdsagiudsau
let BL_body;
let BL_head;
function createMissing(tag) {
    return document
      .getElementsByTagName("html")[0]
      .appendChild(document.createElement(tag));
  }

  if ((BL_body = document.getElementsByTagName("body")[0]) === null) {
    createMissing("body");
    BL_body = document.getElementsByTagName("body")[0];
  }
  if ((BL_head = document.getElementsByTagName("head")[0]) === null) {
    createMissing("head");
    BL_head = document.getElementsByTagName("head")[0];
  }

// let ioScript = document.createElement("script");
// ioScript.src =
//   "https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js";
// //   ioScript.id = 'ioscript';
// console.log(BL_body)
// BL_body.appendChild(ioScript);

let link1 = document.createElement('link');
link1.rel = "preconnect";
link1.href = "https://fonts.gstatic.com";
BL_head.appendChild(link1);
link1.rel = "stylesheet";
link1.href = "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";
BL_head.appendChild(link1);
//  <link rel="preconnect" href="https://fonts.gstatic.com">
// <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">



let chatwrapper = document.createElement('div');
chatwrapper.id = 'chat-wrap';
chatwrapper.hidden=true;
chatwrapper.innerHTML = ` <!-- hidden -->
<div class="head">

</div>
<div class="body" id="chatBody">
    <!-- <div class="i-message">
        <img src= "${baseURL}images/bot.png" alt="">
         <p> Hello! This is IMBot. How can i help you.</p>
    </div>
    <div class="o-message">
            <p>Hello</p>
    </div>
      <div class="o-message">
      <p> Who are You?</p>
      </div>
       <div class="i-message">
           <img src="${baseURL}images/bot.png" alt="">
           <p><img src="${baseURL}images/typing.gif" alt=""></p>
       </div> -->
</div>
<div id="typing">
    
</div>
<div class="footer">
    <div class="text-div">
    <input type="text" placeholder="Type Here..." name="" id="sendText" >
        <div class="send" onclick="sendMessage()" >
            <img src="${baseURL}images/send-button.svg" alt="" srcset="">
        </div>
    </div>
</div>`;
BL_body.appendChild(chatwrapper);
let chatoc = document.createElement('div');
chatoc.id = 'chat-btn';
chatoc.className = "chat-oc"
chatoc.innerHTML = `   <img class="open" src="${baseURL}images/bot.png" alt="">
<!-- <img class="close"  src="${baseURL}images/cross.png" alt="" srcset=""> -->`
// BL_body.append = `
// <div id="chat-wrap"  hidden >
   
// </div>
// <div class="chat-oc" id="chat-btn">
    
       
  
// </div>`
BL_body.appendChild(chatoc);
// BL_body.appendChild(wrapper);
let styleEle= document.createElement('style');
styleEle.innerHTML= `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  #wrapper{
      height: 100%;
      width: 100%;
      position: relative;
  }
  #typing{
    padding:0 10px;
}
  .chat-oc{
      position: fixed;
      bottom: 80px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #181887;
      box-shadow: 0px 0 13px #2b2b2b;
   padding: 15px;
   
  }
  .chat-oc img{
      width: 100%;
      height: 100%;
  }
  .open{
      display: block;
      /* display: none; */
  }
  .close{
      display: none;
      /* display: block; */
  }
  #chat-wrap{
      width: 300px;
      /* border-top: 5px solid #181887; */
      /* border-bottom: 5px solid #181887; */
      height: auto;
      position: fixed;
      bottom: 150px;
      background: white;
  right: 30px;
  border-radius: 10px;
      box-shadow: 0 0 16px #18188757;
  }
  .head{
      width: 100%;
      height: 20px;
      background-color: #181887;
      border-radius: 10px 10px 0 0;
  }
  .footer{
      width: 100%;
      border-bottom: 8px solid #181887;
      border-radius: 0 0 10px 10px;
      min-height: 50px;
      background-color: whitesmoke;
      display: flex;
      justify-content: center;
      align-items: center;
          padding: 7px 0;
  }
  .footer .text-div {
      display: flex;
      width: 95%;
      justify-content: space-between;
  }
  .footer .text-div input{
  width: 85%;
      border: none;
      padding: 8px 14px;
      border-radius: 40px;
      outline: none;
  }
  .footer .send{
      width: 10%;
      display: flex;
      align-items: center;
      height: 32px;
      align-self: flex-end;
  }
  .footer .text-div img{
  width: 80%;
  }
  .body{
      width: 100%;
      height: 400px;
      padding: 10px;
      overflow-y: auto;
      
  }
  .body::-webkit-scrollbar{
      width: 0px;
  }
  .i-message{
      width: 100%;
      display: flex;
      font-family: 'Montserrat';
      font-size: 14px;
      /* float: left; */
            display: flex;
      justify-content: flex-start;
          margin: 10px 0;
  
  }
  .i-message p{
         background-color: #e5e5e5;
      color: black;
      border-radius: 10px;
      padding: 10px;
      max-width: 65%;
  }
  .i-message img{
      width: 30px;
      height: 30px;
      margin-right: 10px;
  }
  .i-message p img{
      height: 8px;
      margin: 0;
      width: auto;
  }
  .o-message{
     width: 100%;
      display: flex;
      font-family: 'Montserrat';
      font-size: 14px;
      margin: 10px 0;
          display: flex;
      justify-content: flex-end;
  
  }
  .o-message p{
      background-color: #E5F0F8;
      color: black;
      border-radius: 10px;
      padding: 10px;
          max-width: 65%;
  }
  
  #chat-wrap[show]{
      display: block;
  animation: showAnim 0.6s ease-in-out    ;
  }
  #chat-wrap[hidden]{
        
  animation: removeAnim 1s ease-in-out;
    /* display: none; */
  }
  
  @keyframes showAnim{
      0%{
  display: block!important;
  opacity: 0;
      }
      100%{
          opacity: 1;
      }
  }
  @keyframes removeAnim{
      0%{
  
  opacity: 1;
      }
      100%{
          opacity: 0;
          display: none;
      }
  }
  .email-d{
      height: 400px;
      /* margin: 0 auto; */
      border-radius: 10px;
      display: flex;
      align-items: center;
  
      /* background-image: url('./chatBg.jfif');
      background-position: center;
      background-size: cover; */
  }
  .overlay{
      width: 100%;
      height: 400px;
      background-color: black;
      position: absolute;
  }`
 
BL_head.appendChild(styleEle);




//dhsajhdiosajodipjasop






let chatWrap = document.getElementById('chat-wrap');
let sendText = document.getElementById("sendText");
let chatBody = document.getElementById('chatBody');
let ioScript = document.getElementById('ioscript');
let typingTag = document.getElementById('typing');
let typingText = `<div class="i-message" >
<img src="bot.png" alt="">
<p><img src="typing.gif" alt=""></p>
</div>`
// let wraper = document.getElementById('wrapper');
// ioScript.src = "https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.5/socket.io.min.js";
// wraper.prepend(ioScript);
// let userId = '5ff8392940b8e10cb497f44e';
let botScript = document.getElementById('bot-script');
console.log(botScript)
let userId = botScript.getAttribute('botUserId');
let socket;
let page = 1;
let userChatId;
function setUserChatId() {
    userChatId = objectId();
    localStorage.setItem('userChatId', userChatId.toString())
    // document.cookie= `userId=${userId.toString()}; expires=Thu, 18 Dec 2023 12:00:00 UTC;path=/`;
    // console.log(document.cookie)
    return;
}
window.onload = (() => {
    let user = localStorage.getItem('userChatId');
    console.log("sdbsjbdc", user);
    if (user) {
        userChatId = user;
        loadOldChats();
    } else {
        userChatId = false;
    }
})();


function initSocket(){
    try {
    socket = io(baseURL, {
        transports: ["websocket"]
    });
    socket.on('connect', function (data) {
        // console.log(data)
        socket.emit('joinchannel', `user-${userChatId}`);
        // data.join(`socket-${userId}`);
        // alert('loaded');
        // socket.emit('message', 'from frontend');
        socket.on("message", (msg) => {
            typingTag.innerHTML='';
            console.log("message",msg);
            textRecieved(msg.text)
        });
        socket.on("typing",()=>{
            typingTag.innerHTML = typingText;
        });
    });
}
catch(err){
    console.log(err)
}


};
ioScript.onload =initSocket();
document.getElementById('chat-btn').addEventListener('click', () => {
    console.log(document.getElementById('chatBody').scrollHeight)
    setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 100);
    chatWrap.toggleAttribute('show');
    chatWrap.toggleAttribute('hidden');
    if (!userChatId) {
        // alert("hh")
    }
    sendText.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            sendMessage();
        }
    })
    // chatWrap.innerHTML = chatWrapContent;
    // postData('initial');
    // chatWrap.setAttribute('show', true);

});
function sendMessage() {
    if (!userChatId) {
        setUserChatId();
    }
    if (sendText.value == '')
        return;
    textEntered(sendText.value);
    console.log(socket);
    socket.emit('message', { text: sendText.value, userId: userId, timestamp: new Date().getTime(), userChatId: userChatId });
    sendText.value = '';
}
function textEntered(text) {
    console.log("textEnterds",text);
    let div = document.createElement('div');
    div.setAttribute('class', 'o-message');
    div.innerHTML = `<p> ${text} </p> `;

    // this.postData(sendText.value);

    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function textRecieved(txt) {
    console.log("textReciebde",txt)
    let div = document.createElement('div');
    div.setAttribute('class', 'i-message');
    div.innerHTML = `   <img src="${baseURL}images/bot.png" alt=""><p> ${txt} </p> `;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}
function loadOldChats() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", baseURL + 'api/messages/' + userChatId);

    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        console.log("redausarte", xhr.status);
        if (xhr.readyState == 4 && xhr.status == 200) {
            const json = JSON.parse(xhr.responseText);
            if(json.data){
                showOldChats(json.data['chats']);
            }
            
        }
    };
    xhr.send();
}

async function postData(txt) {
    socket.emit('message', txt)
    //   let xhr = new XMLHttpRequest();
    //   xhr.open("POST", baseURL + "/webhooks/rest/webhook");

    //     xhr.setRequestHeader("Content-type", "application/json");
    //     xhr.onreadystatechange = function () {
    //         console.log("redausarte", xhr.status);
    //       if (xhr.readyState == 4 && xhr.status == 200) {
    //           console.log(xhr.responseText);
    //           const json = JSON.parse(xhr.responseText);
    //           console.log("json", json[0]);
    //           textRecieved(json[0].text);
    //         //   textRecieved()
    //       }
    //   };
    //   xhr.send(
    //    JSON.stringify({
    //        "sender": "Rasa333",
    //        "message": txt
    //    })
    //   );
}
function showOldChats(chats) {
    console.log(chats)
    chats.forEach(ele => {
        if(ele.fromUser){
            textEntered(ele.text)
        }else{
            textRecieved(ele.text)
        }
    });


}
function objectId() {
    return hex(Date.now() / 1000) +
        ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
}

function hex(value) {
    return Math.floor(value).toString(16)
}
let chatWrapContent = " <div class='head'></div >    <div class='body' id='chatBody'>        <!-- <div class='i-message'>            <img src='bot.png' alt='>                <p> Hello! This is IMBot. How can i help you.</p>    </div>            <div class='o-message'>                <p>Hello</p>            </div>            <div class='o-message'>                <p> Who are You?</p>            </div>            <div class='i-message'>                <img src='bot.png' alt='>                    <p><img src='typing.gif' alt='></p>       </div> --></div>                <div class='footer'>                    <div class='text-div'>                        <input type='text' placeholder='Type Here...' name=' id='sendText' >                            <div class='send' onclick='sendMessage()'>                                <img src='send-button.svg' alt=' srcset='>        </div>                            </div></div>"