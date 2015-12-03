var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from 'angular2/src/core/di';
import { EventEmitter, ObservableWrapper } from 'angular2/src/facade/async';
export let SpyLocation = class {
    constructor() {
        this.urlChanges = [];
        /** @internal */
        this._path = '';
        /** @internal */
        this._query = '';
        /** @internal */
        this._subject = new EventEmitter();
        /** @internal */
        this._baseHref = '';
        // TODO: remove these once Location is an interface, and can be implemented cleanly
        this.platformStrategy = null;
    }
    setInitialPath(url) { this._path = url; }
    setBaseHref(url) { this._baseHref = url; }
    path() { return this._path; }
    simulateUrlPop(pathname) { ObservableWrapper.callEmit(this._subject, { 'url': pathname }); }
    prepareExternalUrl(url) {
        if (url.length > 0 && !url.startsWith('/')) {
            url = '/' + url;
        }
        return this._baseHref + url;
    }
    go(path, query = '') {
        path = this.prepareExternalUrl(path);
        if (this._path == path && this._query == query) {
            return;
        }
        this._path = path;
        this._query = query;
        var url = path + (query.length > 0 ? ('?' + query) : '');
        this.urlChanges.push(url);
    }
    forward() {
        // TODO
    }
    back() {
        // TODO
    }
    subscribe(onNext, onThrow = null, onReturn = null) {
        return ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
    }
    normalize(url) { return null; }
};
SpyLocation = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], SpyLocation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb25fbW9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9tb2NrL2xvY2F0aW9uX21vY2sudHMiXSwibmFtZXMiOlsiU3B5TG9jYXRpb24iLCJTcHlMb2NhdGlvbi5jb25zdHJ1Y3RvciIsIlNweUxvY2F0aW9uLnNldEluaXRpYWxQYXRoIiwiU3B5TG9jYXRpb24uc2V0QmFzZUhyZWYiLCJTcHlMb2NhdGlvbi5wYXRoIiwiU3B5TG9jYXRpb24uc2ltdWxhdGVVcmxQb3AiLCJTcHlMb2NhdGlvbi5wcmVwYXJlRXh0ZXJuYWxVcmwiLCJTcHlMb2NhdGlvbi5nbyIsIlNweUxvY2F0aW9uLmZvcndhcmQiLCJTcHlMb2NhdGlvbi5iYWNrIiwiU3B5TG9jYXRpb24uc3Vic2NyaWJlIiwiU3B5TG9jYXRpb24ubm9ybWFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCO09BQ3hDLEVBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sMkJBQTJCO0FBSXpFO0lBQUFBO1FBRUVDLGVBQVVBLEdBQWFBLEVBQUVBLENBQUNBO1FBQzFCQSxnQkFBZ0JBO1FBQ2hCQSxVQUFLQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUNuQkEsZ0JBQWdCQTtRQUNoQkEsV0FBTUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDcEJBLGdCQUFnQkE7UUFDaEJBLGFBQVFBLEdBQXNCQSxJQUFJQSxZQUFZQSxFQUFFQSxDQUFDQTtRQUNqREEsZ0JBQWdCQTtRQUNoQkEsY0FBU0EsR0FBV0EsRUFBRUEsQ0FBQ0E7UUEwQ3ZCQSxtRkFBbUZBO1FBQ25GQSxxQkFBZ0JBLEdBQVFBLElBQUlBLENBQUNBO0lBRS9CQSxDQUFDQTtJQTNDQ0QsY0FBY0EsQ0FBQ0EsR0FBV0EsSUFBSUUsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFakRGLFdBQVdBLENBQUNBLEdBQVdBLElBQUlHLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO0lBRWxESCxJQUFJQSxLQUFhSSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVyQ0osY0FBY0EsQ0FBQ0EsUUFBZ0JBLElBQUlLLGlCQUFpQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsRUFBQ0EsS0FBS0EsRUFBRUEsUUFBUUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFFbEdMLGtCQUFrQkEsQ0FBQ0EsR0FBV0E7UUFDNUJNLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzNDQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxHQUFHQSxDQUFDQTtRQUNsQkEsQ0FBQ0E7UUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsR0FBR0EsQ0FBQ0E7SUFDOUJBLENBQUNBO0lBRUROLEVBQUVBLENBQUNBLElBQVlBLEVBQUVBLEtBQUtBLEdBQVdBLEVBQUVBO1FBQ2pDTyxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxrQkFBa0JBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ3JDQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxJQUFJQSxJQUFJQSxJQUFJQSxJQUFJQSxDQUFDQSxNQUFNQSxJQUFJQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvQ0EsTUFBTUEsQ0FBQ0E7UUFDVEEsQ0FBQ0E7UUFDREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDbEJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1FBRXBCQSxJQUFJQSxHQUFHQSxHQUFHQSxJQUFJQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxLQUFLQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUN6REEsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7SUFDNUJBLENBQUNBO0lBRURQLE9BQU9BO1FBQ0xRLE9BQU9BO0lBQ1RBLENBQUNBO0lBRURSLElBQUlBO1FBQ0ZTLE9BQU9BO0lBQ1RBLENBQUNBO0lBRURULFNBQVNBLENBQUNBLE1BQTRCQSxFQUFFQSxPQUFPQSxHQUF5QkEsSUFBSUEsRUFDbEVBLFFBQVFBLEdBQWVBLElBQUlBO1FBQ25DVSxNQUFNQSxDQUFDQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO0lBQy9FQSxDQUFDQTtJQUlEVixTQUFTQSxDQUFDQSxHQUFXQSxJQUFZVyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtBQUNqRFgsQ0FBQ0E7QUF2REQ7SUFBQyxVQUFVLEVBQUU7O2dCQXVEWjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge0V2ZW50RW1pdHRlciwgT2JzZXJ2YWJsZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3B5TG9jYXRpb24gaW1wbGVtZW50cyBMb2NhdGlvbiB7XG4gIHVybENoYW5nZXM6IHN0cmluZ1tdID0gW107XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhdGg6IHN0cmluZyA9ICcnO1xuICAvKiogQGludGVybmFsICovXG4gIF9xdWVyeTogc3RyaW5nID0gJyc7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3N1YmplY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogQGludGVybmFsICovXG4gIF9iYXNlSHJlZjogc3RyaW5nID0gJyc7XG5cbiAgc2V0SW5pdGlhbFBhdGgodXJsOiBzdHJpbmcpIHsgdGhpcy5fcGF0aCA9IHVybDsgfVxuXG4gIHNldEJhc2VIcmVmKHVybDogc3RyaW5nKSB7IHRoaXMuX2Jhc2VIcmVmID0gdXJsOyB9XG5cbiAgcGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGF0aDsgfVxuXG4gIHNpbXVsYXRlVXJsUG9wKHBhdGhuYW1lOiBzdHJpbmcpIHsgT2JzZXJ2YWJsZVdyYXBwZXIuY2FsbEVtaXQodGhpcy5fc3ViamVjdCwgeyd1cmwnOiBwYXRobmFtZX0pOyB9XG5cbiAgcHJlcGFyZUV4dGVybmFsVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodXJsLmxlbmd0aCA+IDAgJiYgIXVybC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIHVybCA9ICcvJyArIHVybDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VIcmVmICsgdXJsO1xuICB9XG5cbiAgZ28ocGF0aDogc3RyaW5nLCBxdWVyeTogc3RyaW5nID0gJycpIHtcbiAgICBwYXRoID0gdGhpcy5wcmVwYXJlRXh0ZXJuYWxVcmwocGF0aCk7XG4gICAgaWYgKHRoaXMuX3BhdGggPT0gcGF0aCAmJiB0aGlzLl9xdWVyeSA9PSBxdWVyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICB0aGlzLl9xdWVyeSA9IHF1ZXJ5O1xuXG4gICAgdmFyIHVybCA9IHBhdGggKyAocXVlcnkubGVuZ3RoID4gMCA/ICgnPycgKyBxdWVyeSkgOiAnJyk7XG4gICAgdGhpcy51cmxDaGFuZ2VzLnB1c2godXJsKTtcbiAgfVxuXG4gIGZvcndhcmQoKSB7XG4gICAgLy8gVE9ET1xuICB9XG5cbiAgYmFjaygpIHtcbiAgICAvLyBUT0RPXG4gIH1cblxuICBzdWJzY3JpYmUob25OZXh0OiAodmFsdWU6IGFueSkgPT4gdm9pZCwgb25UaHJvdzogKGVycm9yOiBhbnkpID0+IHZvaWQgPSBudWxsLFxuICAgICAgICAgICAgb25SZXR1cm46ICgpID0+IHZvaWQgPSBudWxsKTogT2JqZWN0IHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVdyYXBwZXIuc3Vic2NyaWJlKHRoaXMuX3N1YmplY3QsIG9uTmV4dCwgb25UaHJvdywgb25SZXR1cm4pO1xuICB9XG5cbiAgLy8gVE9ETzogcmVtb3ZlIHRoZXNlIG9uY2UgTG9jYXRpb24gaXMgYW4gaW50ZXJmYWNlLCBhbmQgY2FuIGJlIGltcGxlbWVudGVkIGNsZWFubHlcbiAgcGxhdGZvcm1TdHJhdGVneTogYW55ID0gbnVsbDtcbiAgbm9ybWFsaXplKHVybDogc3RyaW5nKTogc3RyaW5nIHsgcmV0dXJuIG51bGw7IH1cbn1cbiJdfQ==