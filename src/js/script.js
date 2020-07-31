(function(){
  let left = 0;
  document.querySelector('.prev').onclick = motionToRight;
  document.querySelector('.next').onclick = motionToLeft;
  var cardList = document.querySelector('.card-list');
  let cardsCount = document.getElementsByClassName('card').length;
  var firstCard = document.querySelector('.card');

  //вычисление численного значения ширины элемента
  function getElementLengthNumber(element) {
    let elementWidth = getComputedStyle(element).width;
    let elementNumberLength = elementWidth.indexOf("px");
    let elementWidthNumber = parseInt(elementWidth.substring(0, elementNumberLength),10);
    return elementWidthNumber;
  }

  let cardNumberLength = getElementLengthNumber(firstCard);
  let allCardsLengths = cardNumberLength*cardsCount;
  console.log("ширина контейнера равна "+allCardsLengths);


  function motionToLeft(){
    //console.log("motionToLeft");
    //console.log("left is " + left);
    if(left > (3*cardNumberLength - allCardsLengths)){
      left += -cardNumberLength;
      console.log("left is " + left);
      cardList.style.marginLeft = left + 'px';
    }
  }

  function motionToRight(){
    //console.log("motionToRight");
    if (left < 0)
    {
      left += cardNumberLength;
      console.log("left is " + left);
      cardList.style.marginLeft = left + 'px';
    }
  }
}
)();
