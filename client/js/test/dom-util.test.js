const { createTH,
        createTD,
        createTR,
        removeChildren
      } = require('../dom-util');

describe('dom-util', () => {
  
  describe('DOM creation functions', () => {
    describe('createTH', () => {
      it('produces valid TH element', () => {
        let text = 'Header text';
        const el = createTH(text);
        expect(el.tagName).toBe('TH');
        expect(el.textContent).toEqual(text);
      });
    });

    describe('createTR', () => {
      it('produces valid TR element', () => {
        let text = 'Row text';
        const el = createTR(text);
        expect(el.tagName).toBe('TR');
        expect(el.textContent).toEqual(text);
      });
    });

    describe('createTD', () => {
      it('produces valid TD element', () => {
        let text = 'Cell text';
        const el = createTD(text);
        expect(el.tagName).toBe('TD');
        expect(el.textContent).toEqual(text);
      });
    });
  });

  describe('removeChildren()', () => {
    it('removes one child', () => {
      // set up initial state
      const parent = document.createElement('DIV');
      const child = document.createElement('STRONG');
      parent.appendChild(child);

      //inspect initial state
      expect(parent.childNodes.length).toBe(1);
      expect(parent.childNodes[0]).toBe(child);

      // execute code under test
      removeChildren(parent);

      //inspect resulting state
      expect(parent.childNodes.length).toBe(0);
    });
  });

});