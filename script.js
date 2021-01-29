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

const weightButtons = $('.weight-btn');

weightButtons.each(btn => {
  const button = $(btn);
  const weight = button.data('weight');
  const weightData = weightMap[weight];
  
  button.css('background', weightData.color);
  button.html(weight + 'kg');
})
