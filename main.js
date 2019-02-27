
const transportista = document.getElementById('Form5c76e1da4fba5_carrier_flg_edit')
const gps = document.getElementById('Form5c76e1da4fba5_gps_type_code_edit')

const filteringLabel = (arr, boolean) => {
  const arrElements = Object.values(arr.children)
  arrElements.forEach(radio => {
    if (radio.id === 'TCC') {
      const input = Object.values(radio.children);
      input[0].checked = boolean;
    }
  })
  return boolean
}

transportista.addEventListener('change', () => {
  filteringLabel(gps, transportista.checked)
})


/* Agregando función */
function showResult() {
  var value = $('age').getValue();
  console.log(value);
  alert("Tu edad es : " + value );
}


/* if (sender.getFieldName() == 'CARRIER_FLG') {
  var value = sender.getValue();
  console.log(value);
  if (value == true) {
    console.log('es true');
    editors['GPS_TYPE_CODE'].setValue('TCC');
    editors['GPS_TYPE_CODE'].enabled(false);
    editors['GPS_TYPE_CODE'].visible(false);
    $('#GPS_TYPE_CODE_edit').next().show();
  } else {
    console.log('es false');
    editors['GPS_TYPE_CODE'].setValue('NA');
    editors['GPS_TYPE_CODE'].enabled(true);
    editors['GPS_TYPE_CODE'].visible(true);
    $('#GPS_TYPE_CODE_edit').next().hide();
  }
} */

  
