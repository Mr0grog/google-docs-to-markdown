export const settings = {
  get(key) {
    return this._data[key];
  },

  getAll() {
    return Object.assign({}, this._data);
  },

  set(key, value) {
    this._data[key] = value;
    this.save();
  },

  setAll(newData, { save = true } = {}) {
    Object.assign(this._data, newData);
    if (save) {
      this.save();
    }
  },

  toJSON() {
    return this.getAll();
  },

  save() {
    const serialized = JSON.stringify(this);
    try {
      window.localStorage.setItem(this._storageKey, serialized);
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  },

  load() {
    try {
      const serialized = window.localStorage.getItem(this._storageKey);
      this.setAll(JSON.parse(serialized), { save: false });
    } catch (_error) {
      // OK: there might be nothing saved.
    }
  },

  _storageKey: 'gdoc2md.options',
  _data: {
    downgradeHeaders: true,
    codeBlocks: 'indented',
    headingIds: 'hidden',
    suggestions: 'reject',
    detectTitle: true,
    tableOfContentsStyle: 'replace',
  },
};
