function kilogramToPounds(kgUnit) {
  return Number.parseFloat(kgUnit) * 2.20462262185;
}

function updateWeightInfoDisplay() {
  $(display.kg).html(currentWeight.toFixed(2) + ' kg');
  $(display.lbs).html(kilogramToPounds(currentWeight).toFixed(1) + ' lbs');
}

const weightMap = {
  50: { color: '#188034' },
  25: { color: '#c42121' },
  20: { color: '#213cc4' },
  15: { color: '#f5f525' },
  10: { color: '#1adb41' },
  5: { color: '#ffffff' },
  2.5: { color: '#000000' },
  1.25: { color: '#c4c4c4' },
}

const display = {
  kg: $('#info-weight-kg'),
  lbs: $('#info-weight-lbs'),
} 

let currentWeight = 20;

const weightList = $('#weights-list');
const weightButtons = $('.weight-btn');

weightButtons.each(btn => {
  const button = $(btn);
  const weight = button.data('weight');
  const weightData = weightMap[weight];
  
  button.css('background', weightData.color);
  button.html(weight + 'kg');
});

weightButtons.on('click', e => {
  const weight = $(e.target).data('weight');
  
  $(weightList).append(`<li class="removable"><div class="weight-disc" data-weight="${weight}"></div></li>`);
  
  currentWeight += parseFloat(weight) * 2;
  
  updateWeightInfoDisplay();
});

$('#reset-btn').on('click', function() {
  currentWeight = 20;
  updateWeightInfoDisplay();
  
  $('#weights-list li.removable').remove();
});
