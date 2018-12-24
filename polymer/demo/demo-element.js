import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button'


class DemoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          font-family: sans-serif;
        }
        .vue{
            border-style: solid;
            border-color: #13521F;
        }
        .polymer{
            border-style: solid;
            border-color: #160F99;
            padding: 30px;
        }
      </style>
      
      <div class="polymer">
        <div style="text-align:center">
            <img width="300" alt="Javascript Logo" src="img/polymer-2.svg">
        </div>
      <div class="vue">
          <my-custom-element message$="{{message}}" number$="{{count}}" on-counter-update="handleCounterChange"></my-custom-element>
      </div>
          
         <paper-input label="Polymer paper-input" value="{{message::change}}">
          <div prefix>$</div>
          <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
         </paper-input>
          <input value="{{message::change}}">
          <h3>{{count}}</h3>
          <h3>[[message]]</h3>
          <paper-button raised on-click="increaseCounter">Increase the counter</paper-button>
          <paper-button toggles raised on-click="decreaseCounter">Decrease the counter</paper-button>
      </div>
    `;
  }

    static get properties() {
        return {
            count: {
              type: Number,
              value : 1,
              notify: true,
              readOnly: false
            },
            message:{
              type: String,
              value: "hello bastard",
              notify: true,
              readOnly: false
            }
        };
    }

    handleCounterChange(event) {
    this.count = event.detail[0];
    }

    increaseCounter(){
      ++this.count;
    }

    decreaseCounter(){
      --this.count;
    }

}
customElements.define('demo-element', DemoElement);
