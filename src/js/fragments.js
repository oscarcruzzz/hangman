export const gameHeaderEasy = (name) => {
  return `<div class="game-header">
<h3 id="player-name">
${name}
</h3>
<span id="help">?</span>
</div>`;
};

export const gameHeaderMedium = (name) => {
  return `<div class="game-header">
<h3 id="player-name">
${name}
</h3>
<span id="time-counter"> </span>
<span id="help">?</span>
</div>`;
};

export const gameHeaderHard = (name) => {
  return `<div class="game-header">
<h3 id="player-name">
${name}
</h3>
<span id="time-counter"></span>
<span id=""> </span>
</div>`;
};

export const gameMainView = () => {
  return `<div class="game-view">
  <div id="hangman"></div>
  <div class="game-words">
  <div class="word-container">lorem</div>
<div class="letters-container">
  <div class="numbers">
  <span>0<span>
  <span>1<span>
  <span>2<span>
  <span>3<span>
  <span>4<span>
  <span>5<span>
  <span>6<span>
  <span>7<span>
  <span>8<span>
  <span>9<span>  
  </div>
  <span>A<span>
  <span>B<span>
  <span>C<span>
  <span>D<span>
  <span>E<span>
  <span>F<span>
  <span>G<span>
  <span>H<span>
  <span>I<span>
  <span>J<span>  
  <span>K<span>
  <span>L<span>
  <span>M<span>
  <span>N<span>
  <span>O<span>
  <span>P<span>
  <span>Q<span>
  <span>R<span>
  <span>S<span>
  <span>T<span>  
  <span>U<span>
  <span>V<span>
  <span>W<span>
  <span>X<span>
  <span>Y<span>
  <span>Z<span>  
</div>
</div>
</div>`;
};
