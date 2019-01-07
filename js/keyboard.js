  const keyboard = (() => {
      const drawKeys = () => {
          let divContent = "";
          const alphabet = new Figures();
          const alphabetLength = alphabet.figuresLength;
          const figures = alphabet.figures;
         for (i = 0; i < alphabetLength; i++) {
              let element = "fig" + i;
              divContent += `<div class="litera" onclick="check('${i}')" id="${element}">${figures[i]} </div>`;
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