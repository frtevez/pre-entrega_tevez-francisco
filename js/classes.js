class CardStructure {
    constructor(title, subtitle, caption, description, type, art) {
        this.title = title;
        this.subtitle = subtitle;
        this.caption = caption;
        this.description = description;
        this.type = type;
        this.art = art;
    };

    set(property, value) {
        this[property] = value;
    };

    add(property, value){
        this[property].push(value)
    }
};
