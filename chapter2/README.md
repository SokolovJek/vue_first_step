# patterns

```sh
node .\proxy-1.js
```

## proxy
Слово proxy переводится как делегировать, что и заложенно в смысл этого патерна.
Сущность proxy является проклаткой между клиентом и целевым обектом, которая в свою очередь дублирует поведения цели и проксирует до нее данные, и плюс делает еще какие то операции с данными.
Данный патерн может быть реалзвар на разных уровнях как на низком - объект, так и на высоком - приложение.
Прокси сохраняет тот же API, что и исходный целевой объект.

client --> proxy --> server

## promise
Этот шаблон используется в асинхроном коде, когда при вызове асинхронной функции в отает получем объект Promise. У данного обекта есть простой API реализующий три метода then, catch, finally
then: примнимает два калбека <resolve> и <reject>. Которые будут вызваны в зависимости от того
как завершится функция
catch: вызвана если будет ошибка
finally: в любом случае

## Dependency injection
