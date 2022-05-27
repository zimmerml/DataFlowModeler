import store from "@/plugins/store";
export default class Helper{
    addNodeToDrawFlow(name, pos_x, pos_y){
        if(store.getters.GetEditor.editor_mode === 'fixed') {
            return false;
        }
        pos_x = pos_x * ( store.getters.GetEditor.precanvas.clientWidth / (store.getters.GetEditor.precanvas.clientWidth * store.getters.GetEditor.zoom)) - (store.getters.GetEditor.precanvas.getBoundingClientRect().x * ( store.getters.GetEditor.precanvas.clientWidth / (store.getters.GetEditor.precanvas.clientWidth * store.getters.GetEditor.zoom)));
        pos_y = pos_y * ( store.getters.GetEditor.precanvas.clientHeight / (store.getters.GetEditor.precanvas.clientHeight * store.getters.GetEditor.zoom)) - (store.getters.GetEditor.precanvas.getBoundingClientRect().y * ( store.getters.GetEditor.precanvas.clientHeight / (store.getters.GetEditor.precanvas.clientHeight * store.getters.GetEditor.zoom)));

        switch(name){
            case 'input':{
                let input = `<div><div class="title-box"><i class="fab fa-facebook"></i> Input </div></div>`;
                store.getters.GetEditor.addNode('input', 0,  1, pos_x, pos_y, 'input', {}, input );
                break;
            }
            case 'filter':{
                let filter = `<div><div class="title-box"><i class="fab fa-facebook"></i> Filter </div></div>`;
                store.getters.GetEditor.addNode('filter', 1,  1, pos_x, pos_y, 'filter', {}, filter );
                break;
            }

            case 'output':{
                let output = `<div><div class="title-box"><i class="fab fa-facebook"></i> Output </div></div>`;
                store.getters.GetEditor.addNode('output', 1,  0, pos_x, pos_y, 'output', {}, output );
                break;
            }
        }
    }

}