/* function Form5c76e1da4fba5_initd(editors) {

}
function Form5c76e1da4fba5Validation(fieldValues, errorInfo) {
  ; return true;
} */

function Form5c76e1da4fba5_EditorValuesChanged(sender, editors) {

  console.log(sender);
  console.log(editors);

  if (sender.getFieldName() == 'CARRIER_FLG') {
    if (sender.getValue() == 0) {
      console.log(sender.getValue());
      editors['GPS_TYPE_CODE'].setValue('TCC');
      editors['GPS_TYPE_CODE'].enabled(false);
      editors['GPS_TYPE_CODE'].visible(false);
      $('#GPS_TYPE_CODE_edit').next().show();
    }
    else {
      editors['GPS_TYPE_CODE'].enabled(true);
      editors['GPS_TYPE_CODE'].visible(true);
      $('#GPS_TYPE_CODE_edit').next().show();
    }
  }
}

/* function Form5c76e1da4fba5_CalculateControlValues(editors) {

}
 */
