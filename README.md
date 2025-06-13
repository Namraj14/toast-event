## Toast Notifications in LWC

Toasts are used to provide immediate feedback to users without disrupting their current tasks. They are commonly used in Lightning Web Components (LWC) to inform users about:

- Success or failure of actions  
- Warnings  
- Important system events  
- Other short-lived messages

### Key Characteristics

- **Non-intrusive**: Toasts do not interrupt user workflows.
- **Contextual**: Content is short and relevant to the action performed.
- **Automatic or Triggered**: Toasts may appear automatically or in response to user interactions.
- **Temporary**: Toasts disappear after a set period or when manually closed by the user.

Use toast messages in your LWC projects to improve user experience and provide quick feedback.

| Variant   | Description                                  | UI Indicator    |
| --------- | -------------------------------------------- | --------------- |
| `success` | Indicates a successful operation             | Green checkmark |
| `error`   | Indicates a failed operation or system error | Red exclamation |
| `warning` | Warns users about a potential issue          | Yellow triangle |
| `info`    | Provides general information to the user     | Blue info icon  |

## ⚡ Toast in LWC

- Toast is a **Service** (Prebuilt by Salesforce)
- Toasts are **not regular HTML** — they are part of the **Salesforce UI framework**.

Salesforce gives you a ready-to-use utility class for it:  
👉 `ShowToastEvent` from `lightning/platformShowToastEvent`

You import this like a tool or helper that does all the work of showing that popup:

```js
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
