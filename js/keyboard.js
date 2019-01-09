  const keyboard = (() => {
      const drawKeys = () => {
          let divContent = "";
          const figures = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];
          const alphabetLength = figures.length;
         for (i = 0; i < alphabetLength; i++) {
              let element = "fig" + i;
              divContent += `<div class="litera" onclick="check('${i}', '${figures[i]}')" id="${element}">${figures[i]} </div>`;
              const arrangeKeys = index => {
                const figuresInRow = 7;
                const cuttingDiv = `<div style="clear: both;"></div>`;
                if ((index + 1) % figuresInRow === 0) divContent += cuttingDiv;
              }
              arrangeKeys(i);
          }
          return divContent;
      }
  
      return {
          drawKeys: drawKeys
      }
  })()
  