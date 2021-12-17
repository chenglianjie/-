

  !function () {
      setTimeout(()=>{
        let dom = document.querySelector(".checkout");
        
        dom.addEventListener(
          "click",
          () => {
            console.log("addEventListener点击事件1");
          },
          false
        );
        dom.addEventListener(
          "click",
          () => {
            console.log("addEventListener点击事件2");
          },
          false
        );
        console.log("dom",dom)
        const domProxy = new Proxy(dom, {
            get: function (target, key) {
              console.log("get", target, key);
              return target[key];
            },
            set: function (target, key, newValue) {
              console.log("set", target, key, newValue);
              target[key] = newValue;
            },
          });
          let click = domProxy.onclick;
          console.log("domProxy",domProxy,click)
      },3000)
     
  }()