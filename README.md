# r5m-scripts

*r5m-scripts* - это набор скриптов (ну ладно, пока что всего один скрипт) для создания основы лендинга на движке r5m-landing.

## Зачем ##
Чтобы не заниматься ```crtl + c, ctrl + v``` при создании проектов и упростить обновление и поддержание единой кодовой базы.

## Как это работает ##

### Шаг 1. Установить супер-скрипт. ###

```shell
# Nastya, in Ubuntu place the word "sudo" before the word "npm"
npm i -g https://github.com/r5m-team/r5m-scripts.git
```

### Шаг 2. Запустить супер-скрипт. ###

```
r5m-init path/to/source
```

где path/to/source - это путь, по которому вы хотите создать проект
