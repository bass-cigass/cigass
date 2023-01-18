import Swal from 'sweetalert2';

/**
  * This function allows us to display customizable alerts with sweetAlerts
  * @param title is the title of the alert
  * @param message is the content or message of the alert
  * @param type is the type of alert we want to show(info, success, warning, error)
  * For more info about sweetAlert read their fully documentation https://sweetalert2.github.io/
*/
export function showAlert(title, message, type, allowOutsideClick) {
    Swal.fire({
        title,
        text: message,
        icon: type,
        allowOutsideClick: allowOutsideClick ? true : false
    })
    return;
}

/**
  * This function allows us to display a loader
  * @param title is the title of the loader like (Chargement en cours ...)
*/
export function showLoading(title) {
    Swal.fire({
        title: title,
        allowOutsideClick: false
    });
    
}

// Close a modal
export function closeSwal() {
    Swal.close();
}

/** This is used to create a custom sweetAlert using your own functionnality like adding html inside etc .
* @param object is the custom Object we passed in to 
*/
export function customSweetAlert(object: Object) {
    return Swal.fire(object)
    
}
