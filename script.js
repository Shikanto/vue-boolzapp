Vue.config.devtools = true;

new Vue ({
    el: "#main-container",
    data: {
        chatList: [
            {
              name: "Mario",
              avatar: "img/avatar_2.jpg",
              messages: [
                {
                  text: "Ciao Mario",
                  timestamp: "2021-11-03 09:55:00",
                  status: "sent",
                },
                {
                  text: "Ciao, grazie per avermi pensato. Come ti butta?",
                  timestamp: "2021-11-03 09:58:00",
                  status: "received",
                },
              ],
            },
            {
              name: "Giulia",
              avatar: "img/avatar_3.jpg",
              messages: [
                {
                  text: "Ciao Giulia",
                  timestamp: "2021-11-02 19:55:00",
                  status: "sent",
                },
                {
                  text: "Ciao, grazie per avermi pensato. Come ti butta?",
                  timestamp: "2021-11-03 09:20:00",
                  status: "received",
                },
              ],
            },
        ],
    }

});