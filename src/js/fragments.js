export const gameHeaderEasy = (name) => {
  return `<div class="game-header">
<h3 id="player-name">
${name}
</h3>
<span id="help" onClick="openModal()">?</span>
</div>`;
};

export const gameHeaderMedium = (name) => {
  return `<div class="game-header">
<h3 id="player-name">
${name}
</h3>
<span id="time-counter"> </span>
<span id="help" onClick="openModal()">?</span>
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
  <div id="word-container"></div>
<div class="letters-container">
  <div class="numbers">
  <span class="letter" id="0" onclick="handleWrite(this.id)">0</span>
  <span class="letter" id="1" onclick="handleWrite(this.id)">1</span>
  <span class="letter" id="2" onclick="handleWrite(this.id)">2</span>
  <span class="letter" id="3" onclick="handleWrite(this.id)">3</span>
  <span class="letter" id="4" onclick="handleWrite(this.id)">4</span>
  <span class="letter" id="5" onclick="handleWrite(this.id)">5</span>
  <span class="letter" id="6" onclick="handleWrite(this.id)">6</span>
  <span class="letter" id="7" onclick="handleWrite(this.id)">7</span>
  <span class="letter" id="8" onclick="handleWrite(this.id)">8</span>
  <span class="letter" id="9" onclick="handleWrite(this.id)">9</span>  
  </div>  
  <span class="letter" id="A" onclick="handleWrite(this.id)">A</span>
  <span class="letter" id="B" onclick="handleWrite(this.id)">B</span>
  <span class="letter" id="C" onclick="handleWrite(this.id)">C</span>
  <span class="letter" id="D" onclick="handleWrite(this.id)">D</span>
  <span class="letter" id="E" onclick="handleWrite(this.id)">E</span>
  <span class="letter" id="F" onclick="handleWrite(this.id)">F</span>
  <span class="letter" id="G" onclick="handleWrite(this.id)">G</span>
  <span class="letter" id="H" onclick="handleWrite(this.id)">H</span>
  <span class="letter" id="I" onclick="handleWrite(this.id)">I</span>
  <span class="letter" id="J" onclick="handleWrite(this.id)">J</span>  
  <span class="letter" id="K" onclick="handleWrite(this.id)">K</span>
  <span class="letter" id="L" onclick="handleWrite(this.id)">L</span>
  <span class="letter" id="M" onclick="handleWrite(this.id)">M</span>
  <span class="letter" id="N" onclick="handleWrite(this.id)">N</span>
  <span class="letter" id="O" onclick="handleWrite(this.id)">O</span>
  <span class="letter" id="P" onclick="handleWrite(this.id)">P</span>
  <span class="letter" id="Q" onclick="handleWrite(this.id)">Q</span>
  <span class="letter" id="R" onclick="handleWrite(this.id)">R</span>
  <span class="letter" id="W" onclick="handleWrite(this.id)">S</span>
  <span class="letter" id="T" onclick="handleWrite(this.id)">T</span>  
  <span class="letter" id="U" onclick="handleWrite(this.id)">U</span>
  <span class="letter" id="V" onclick="handleWrite(this.id)">V</span>
  <span class="letter" id="W" onclick="handleWrite(this.id)">W</span>
  <span class="letter" id="X" onclick="handleWrite(this.id)">X</span>
  <span class="letter" id="Y" onclick="handleWrite(this.id)">Y</span>
  <span class="letter" id="Z" onclick="handleWrite(this.id)">Z</span>  
  <span class="letter" id=":" onclick="handleWrite(this.id)">:</span>  
  <span class="letter" id="'" onclick="handleWrite(this.id)">'</span>  
  <span class="letter" id="!" onclick="handleWrite(this.id)">!</span>  
  <span class="letter" id="?" onclick="handleWrite(this.id)">?</span>  
  <span class="letter" id="#" onclick="handleWrite(this.id)">#</span>    
</div>
<div class="score">
<h2>Score:<span data-score="0" id="score"></span></h2>
</div>
</div>
</div>`;
};
