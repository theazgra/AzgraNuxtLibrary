type ExtendedVue = Vue & {
    $parent: ExtendedVue;
    
    // i18n
    $i18n: any;
    $t: Function;
    $tc: Function;
    $te: Function;
    $d: Function;
    $n: Function;

};

export function connectToServices(cmpnt: Vue) {
    const component = cmpnt as ExtendedVue;
    const parent = component.$parent;

    component.$store = parent.$store;

    if (!component.$i18n) {
        component.$i18n = parent.$i18n
    }

    component.$t = parent.$t;
    component.$tc = parent.$tc;
    component.$te = parent.$te;
    component.$d = parent.$d;
    component.$n = parent.$n;
}
