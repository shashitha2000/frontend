import { Component, OnInit } from '@angular/core';

declare const BotUI: any;

@Component({
  selector: 'app-botui',
  templateUrl: './botui.component.html',
  styleUrls: ['./botui.component.css']
})
export class BotuiComponent implements OnInit {

  botui: any;

  ngOnInit() {
    this.botui = new BotUI('my-botui-app');

    this.botui.message.add({
      content: 'Hello! How can I assist you today?',
      delay: 1000,
    });
  }

  sendMessage(message: string) {
    this.botui.message.human({ content: message });
    // Process the user message here and send a response
  }

}
