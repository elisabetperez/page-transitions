class TF_UI{
    constructor(){

    }

    init(){
    }
    _getElements(id) {
        if (typeof id == "object") {
          return [id];
        } else {
          return document.querySelectorAll(id);
        }
    };

    // addClass(selector,'class')
    addClass(sel, name) {
        this._addClassElements(this._getElements(sel), name);
    };
    _addClassElements (elements, name) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
          this._addClassElement(elements[i], name);
        }
    };
    _addClassElement (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    };

    //removeClass(selector,'class')
    removeClass(sel, name) {
        this._removeClassElements(this._getElements(sel), name);
    };
    _removeClassElements(elements, name) {
        var i, l = elements.length, arr1, arr2, j;
        for (i = 0; i < l; i++) {
          this._removeClassElement(elements[i], name);
        }
    };
    _removeClassElement  (element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
          }
        }
        element.className = arr1.join(" ");
    };

    // ToggleClass('class')
    toggleClass(sel, c1, c2) {
        this._toggleClassElements(this._getElements(sel), c1, c2);
    };
    _toggleClassElements(elements, c1, c2) {
        var i, l = elements.length;
        for (i = 0; i < l; i++) {
            this._toggleClassElement(elements[i], c1, c2);
        }
    };
    _toggleClassElement (element, c1, c2) {
        var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
        t1 = (c1 || "");
        t2 = (c2 || "");
        t1Arr = t1.split(" ");
        t2Arr = t2.split(" ");
        arr = element.className.split(" ");
        if (t2Arr.length == 0) {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
          } else {
            this._addClassElement(element, t1);
          }
        } else {
          allPresent = true;
          for (j = 0; j < t1Arr.length; j++) {
            if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
          }
          if (allPresent) {
            this._removeClassElement(element, t1);
            this._addClassElement(element, t2);
          } else {
            this._removeClassElement(element, t2);
            this._addClassElement(element, t1);
          }
        }
    };
    is_explorer(){
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  {
          return true;
      }
      else { 
        return false;
      }   
    }
    addEventHandler(elem, eventType, handler) {
       if (elem.addEventListener)
           elem.addEventListener (eventType, handler, false);
       else if (elem.attachEvent)
           elem.attachEvent ('on' + eventType, handler);
   }

}
export default TF_UI;