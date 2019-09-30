(window["webpackJsonpvisual-dna"]=window["webpackJsonpvisual-dna"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={DNAred:"Summary_DNAred__1Cr_B",DNAblue:"Summary_DNAblue__3RHdO",DNAgreen:"Summary_DNAgreen__3AHWO",DNAorange:"Summary_DNAorange__2WGPQ",DNA:"Summary_DNA__2uMhN"}},function(e,t,n){e.exports={heading:"Interface_heading__10019",backdrop:"Interface_backdrop__zz14B",mainList:"Interface_mainList__-MwIR",view:"Interface_view__VNlC7",active:"Interface_active__28kFK"}},function(e,t,n){e.exports={Input:"Input_Input__2MHHb",InputElement:"Input_InputElement__3_77R",Invalid:"Input_Invalid__1c5Dv",ErrMessage:"Input_ErrMessage__3lhFP"}},,,,,,,function(e,t,n){e.exports={Button:"Button_Button__HOrbw",Success:"Button_Success__wYGCa",Sort:"Button_Sort__5TkBE"}},function(e,t,n){e.exports={FormLayout:"AddDNA_FormLayout__RF3tm",Label:"AddDNA_Label__2QpNX"}},,,,,,,,,function(e,t,n){e.exports={Modal:"Modal_Modal__3ihEg"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__MfeG3"}},function(e,t,n){e.exports={DNA:"DNA_DNA__2SSAD"}},function(e,t,n){e.exports={View:"ViewDNA_View__3HEz6"}},function(e,t,n){e.exports={App:"App_App__16ZpL"}},function(e,t,n){e.exports=n(45)},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),c=n.n(s),i=(n(40),n(9)),o=n(4),l=n(5),u=n(7),p=n(6),h=n(8),m=n(17),d=n(13),v=n.n(d),f=function(e){var t=null,n=[v.a.InputElement];switch(e.invalid&&e.touched&&n.push(v.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({},e.elementConfig,{className:n.join(" "),value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({},e.elementConfig,{className:n.join(" "),value:e.value,onChange:e.changed}));break;default:t=r.a.createElement("input",Object.assign({},e.elementConfig,{className:n.join(" "),value:e.value,onChange:e.changed}))}var a=null;return e.invalid&&e.touched&&(a=r.a.createElement("p",{className:v.a.ErrMessage},"Please enter a valid ",e.name)),r.a.createElement("div",{className:v.a.Input},t,a)},N=n(20),g=n.n(N),b=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[g.a.Button,g.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},q=n(21),E=n.n(q);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={DNAForm:{sequenceName:{name:"sequence name (Ex. AF016541.1) ",elementType:"input",elementConfig:{type:"text",placeholder:"Sequence Name"},value:"",validation:{required:!0,minLength:4,validChar:!1,sequenceExists:!1},valid:!1,touched:!1},sequenceDescription:{name:"sequence description (Ex. Cloning vector pUC-JK, complete sequence)",elementType:"input",elementConfig:{type:"text",placeholder:"Sequence Description"},value:"",validation:{required:!0,minLength:10,validChar:!1,sequenceExists:!1},valid:!1,touched:!1},sequenceDNA:{name:"sequence (Ex. TCGCGCGTTTCG...) or sequence already exists",elementType:"textarea",elementConfig:{type:"text",placeholder:"DNA Sequence"},value:"",validation:{required:!0,validChar:!0,minLength:4,sequenceExists:!0},valid:!1,touched:!1,exists:!1}},formIsValid:!1},n.addHandler=function(e){e.preventDefault();var t={};for(var a in n.state.DNAForm)t[a]=n.state.DNAForm[a].value;n.props.DNA.push(t),n.setState({DNAForm:{sequenceName:{name:"sequence name (Ex. AF016541.1) ",elementType:"input",elementConfig:{type:"text",placeholder:"Sequence Name"},value:"",validation:{required:!0,minLength:4,validChar:!1,sequenceExists:!1},valid:!1,touched:!1},sequenceDescription:{name:"sequence description (Ex. Cloning vector pUC-JK, complete sequence)",elementType:"input",elementConfig:{type:"text",placeholder:"Sequence Description"},value:"",validation:{required:!0,minLength:10,validChar:!1,sequenceExists:!1},valid:!1,touched:!1},sequenceDNA:{name:"sequence (Ex. TCGCGCGTTTCG...) or sequence already exists",elementType:"textarea",elementConfig:{type:"text",placeholder:"DNA Sequence"},value:"",validation:{required:!0,validChar:!0,minLength:4,sequenceExists:!0},valid:!1,touched:!1,exists:!1}}})},n.inputChangedHandler=function(e,t){var a=D({},n.state.DNAForm),r=D({},a[t]);r.value=e.target.value,r.valid=n.checkValidity(r.value,r.validation),r.touched=!0,a[t]=r;var s=!0;for(var c in a)s=a[c].valid&&s;n.setState({DNAForm:a,formIsValid:s})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.validChar&&(n=/^[A-Z]+$/.test(e)&&n),t.sequenceExists){var a=!1;if(this.props.DNA.length>0){for(var r in this.props.DNA)this.props.DNA[r].sequenceDNA===e&&(a=!0);n=!a&&n}}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.DNAForm)t.push({id:n,config:this.state.DNAForm[n]});var a=null;this.state.formIsValid&&(a="Success");var s=r.a.createElement("form",{onSubmit:this.addHandler},r.a.createElement("p",{className:E.a.Label},"Enter DNA name, description and sequence"),t.map((function(t){return r.a.createElement(f,{name:t.config.name,key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,touched:t.config.touched})})),r.a.createElement(b,{disabled:!this.state.formIsValid,btnType:a},"Submit"));return r.a.createElement("div",{className:E.a.FormLayout},s)}}]),t}(a.Component),_=n(30),O=n.n(_),w=function(e){return e.children},j=n(31),C=n.n(j),S=function(e){return e.show?r.a.createElement("div",{className:C.a.Backdrop,onClick:e.clicked}):null},x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(S,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:O.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),k=n(32),T=n.n(k),I=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).executeSeqChange=function(){n.props.seq.push(n.props.sequence),n.props.show()},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.sequence;return this.props.sequence.length>35&&(e=this.props.sequence.slice(0,35)+"..."),r.a.createElement("div",{className:T.a.DNA},r.a.createElement("p",null,"Name: ",this.props.name),r.a.createElement("p",null,"Description: ",this.props.description),r.a.createElement("p",null,"Sequence: ",e),r.a.createElement(b,{clicked:this.executeSeqChange},"View Full Sequence"))}}]),t}(a.Component),L=n(33),P=n.n(L),F=n(11),B=n.n(F),V=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0,t=[];for(var n in this.props.seq)e%77===0&&t.push(r.a.createElement("br",null)),"A"===this.props.seq[n]?t.push(r.a.createElement("p",{className:B.a.DNAred},this.props.seq[n])):"G"===this.props.seq[n]?t.push(r.a.createElement("p",{className:B.a.DNAorange},this.props.seq[n])):"T"===this.props.seq[n]?t.push(r.a.createElement("p",{className:B.a.DNAblue},this.props.seq[n])):"C"===this.props.seq[n]?t.push(r.a.createElement("p",{className:B.a.DNAgreen},this.props.seq[n])):t.push(r.a.createElement("p",{className:B.a.DNA},this.props.seq[n])),e+=1;return e=0,r.a.createElement("div",null,t)}}]),t}(a.Component);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var H=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={search:{name:"Search",elementType:"input",elementConfig:{type:"text",placeholder:"Search Sequence Name"},value:""},sorted:!1,show:!1,sequence:[]},n.inputChangedHandler=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.search);t.value=e.target.value,n.setState({search:t}),n.setState({sorted:!1})},n.sortSequenceName=function(){n.props.DNA.sort((function(e,t){var n=e.sequenceName.toLowerCase(),a=t.sequenceName.toLowerCase();return n<a?-1:n>a?1:0})),n.setState({sorted:!0})},n.showSequence=function(){n.setState({show:!0})},n.hideSequence=function(){n.setState({show:!1})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=null,n=null;if(this.props.DNA.length>0&&(t=r.a.createElement("div",null,r.a.createElement(b,{btnType:"Sort",clicked:this.sortSequenceName},"Sort"),r.a.createElement(f,{invalid:!1,touched:!1,elementType:this.state.search.elementType,name:this.state.search.name,elementConfig:this.state.search.elementConfig,value:this.state.search.value,changed:function(t){return e.inputChangedHandler(t)}}))),this.props.DNA.length>0&&""===this.state.search.value||this.state.sorted)n=r.a.createElement("div",null,this.props.DNA.map((function(t){return r.a.createElement(I,{id:t,name:t.sequenceName,description:t.sequenceDescription,sequence:t.sequenceDNA,show:e.showSequence,seq:e.state.sequence})})));else if(""!==this.state.search.value){var a=[];for(var s in this.props.DNA){this.props.DNA[s].sequenceName.includes(this.state.search.value)&&a.push(s)}n=r.a.createElement("div",null,a.map((function(t){return r.a.createElement(I,{id:t,name:e.props.DNA[t].sequenceName,description:e.props.DNA[t].sequenceDescription,sequence:e.props.DNA[t].sequenceDNA,show:e.showSequence,seq:e.state.sequence})}))),a=[]}else n=r.a.createElement("h2",null,"No DNA samples have been added.");var c=null;if(this.state.show){var i=this.state.sequence[this.state.sequence.length-1];c=r.a.createElement(V,{seq:i})}return r.a.createElement("div",{className:P.a.View},t,n,r.a.createElement(x,{show:this.state.show,modalClosed:this.hideSequence},c))}}]),t}(a.Component),M=n(12),z=n.n(M),J=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={DNA:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:z.a.backdrop},r.a.createElement("header",null,r.a.createElement("h1",{className:z.a.heading},"Visualize DNA"),r.a.createElement("nav",null,r.a.createElement("ul",{className:z.a.mainList},r.a.createElement("li",{className:z.a.view},r.a.createElement(i.b,{to:"/",exact:!0},"View Sequence")),r.a.createElement("li",{className:z.a.view},r.a.createElement(i.b,{to:"/add-sequence"},"Add Sequence"))))),r.a.createElement(i.c,{path:"/",exact:!0,render:function(t){return r.a.createElement(H,Object.assign({DNA:e.state.DNA},t))}}),r.a.createElement(i.c,{path:"/add-sequence",render:function(t){return r.a.createElement(A,Object.assign({DNA:e.state.DNA},t))}}))}}]),t}(a.Component),R=n(34),W=n.n(R);var K=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:W.a.App},r.a.createElement(J,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[35,1,2]]]);
//# sourceMappingURL=main.56a633dd.chunk.js.map