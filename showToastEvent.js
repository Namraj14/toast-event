// Import the LightningElement base class from the LWC module
import { LightningElement } from 'lwc';

// Import the ShowToastEvent to display toast notifications
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// Define and export the component class
export default class showToastEvent extends LightningElement {

    // Method to show a success toast message
    showSuccessToast() {
        // Create a new ShowToastEvent with success details
        const evt = new ShowToastEvent({
            title: 'Success', // Title of the toast
            message: 'Your account was created successfully!', // Message to display
            variant: 'success' // Variant sets the toast style (success = green) //// success | error | warning | info
        });

        // Dispatch the toast event to display it on the UI
        this.dispatchEvent(evt);
    }

    // Method to show an error toast message
    showErrorToast() {
        // Create a new ShowToastEvent with error details
        const evt = new ShowToastEvent({
            title: 'Error', // Title of the toast
            message: 'Your account was not created successfully!', // Error message
            variant: 'error' // Variant sets the toast style (error = red)
        });

        // Dispatch the toast event to display it on the UI
        this.dispatchEvent(evt);
    }
}
