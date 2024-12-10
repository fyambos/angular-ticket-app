interface Translations {
    [language: string]: {
      [key: string]: any;
    };
  }

export const translations: Translations  = {
    en: {
      confirm: {
        yes: 'Yes',
        no: 'No',
        cancel: 'Cancel',
        confirm: 'Confirm',
      },
      home: {
        title: 'TODO',
        noTasks: 'No tasks available.',
        search: 'Search',
        create: 'Create Task',
        edit: 'Edit Task',
        taskTitle: 'Task Title',
        description: 'Description',
        delete: 'Delete Task',
        confirmDelete: 'Are you sure you want to delete this task?',
        comments: 'Comments',
        add: 'Add',
        save: 'Save',
      },
      auth: {
        login: {
          title: 'Login',
          email: 'Email',
          password: 'Password',
          login: 'Login',
          noAccount: 'Don\'t have an account?',
          signUp: 'Sign up',
          errorMessage: 'Incorrect email or password',
          connectedAs: 'Connected as',
        },
        signup: {
          title: 'Sign up',
          email: 'Email',
          password: 'Password',
          signUp: 'Sign up',
          alreadyAccount: 'Already have an account?',
          login: 'Login',
          errorMessage: 'An error occurred during registration',
        },
        logout: {
          logout: 'Logout'
        }
      },
      profile: {
        title: 'Profile',
        email: 'Email',
        joined: 'Joined',
        viewAllTasks: 'View all tasks',
        errorMessage: 'An error occurred during saving',
        noTasks: 'No tasks found for this user.',
        editProfile: 'Edit Profile',
        nickname: 'Nickname',
        talkAboutYourself: 'Tell us about yourself',
        role: 'Role',
        save: 'Save Changes',
        bio: 'Bio',
      },
      dashboard: {
        title: 'Dashboard',
        globalView: 'Global View',
        users: 'Users',
        categories: 'Categories',
        tasks: 'Tasks',
        comments: 'Comments',
        taskStats: 'Task Statistics',
        byStatus: 'By Status',
        byStatusFrom: 'By Status from',
        toStatus: 'to',
        byCategories: 'By Categories',
        top5: 'Top 5 of most commented tasks',
        noPeriod: 'No period selected',
      },
      categories: {
        research: 'Research',
        design: 'Design',
        development: 'Development',
        testing: 'Testing',
        deployment: 'Deployment',
        maintenance: 'Maintenance',
        bug: 'Bug',
        feature: 'Feature',
        improvement: 'Improvement',
        support: 'Support',
        documentation: 'Documentation',
      },
      management: {
        title: 'Task Management',
        OK: 'Print OK to Console',
        mockTasks: 'Add Mock Tasks in Bulk',
        deleteAll: 'Delete All Tasks',
        printCategories: 'Print All Categories',
        printUsers: 'Print All Users',
        printTasks: 'Print All Tasks',
        confirmDelete: 'Are you sure you want to delete all tasks?',
      },
      members: {
        title: 'Members',
        viewProfile: 'View Profile',
        user: 'User',
        admin: 'Admin',
      },
      status: {
        ALL: 'All',
        CANCELLED: 'Cancelled',
        TODO: 'To Do',
        DONE: 'Done',
        DOING: 'In Progress',
      }
    },
    fr: {
      confirm: {
        yes: 'Oui',
        no: 'Non',
        cancel: 'Annuler',
        confirm: 'Confirmer',
      },
      home: {
        title: 'TODO',
        noTasks: 'Aucune tâche disponible.',
        search: 'Rechercher',
        create: 'Créer une tâche',
        edit: 'Modifier la tâche',
        taskTitle: 'Titre de la tâche',
        description: 'Description',
        deleteTask: 'Supprimer la tâche',
        confirmDelete: 'Êtes-vous sûr de vouloir supprimer cette tâche ?',
        comments: 'Commentaires',
        add: 'Ajouter',
        save: 'Enregistrer',
      },
      auth: {
        login: {
          title: 'Connexion',
          email: 'E-mail',
          password: 'Mot de passe',
          login: 'Se connecter',
          noAccount: 'Vous n\'avez pas de compte ?',
          signUp: 'S\'inscrire',
          errorMessage: 'E-mail ou mot de passe incorrect',
          connectedAs: 'Connecté en tant que',
        },
        signup: {
          title: 'Inscription',
          email: 'E-mail',
          password: 'Mot de passe',
          signUp: 'S\'inscrire',
          alreadyAccount: 'Vous avez déjà un compte ?',
          login: 'Se connecter',
          errorMessage: 'Une erreur s\'est produite lors de l\'inscription',
        },
        logout: {
          logout: 'Se déconnecter'
        }
      },
      profile: {
        title: 'Profil',
        email: 'E-mail',
        joined: 'Rejoint',
        viewAllTasks: 'Voir toutes les tâches',
        errorMessage: 'Une erreur s\'est produite lors de l\'enregistrement',
        noTasks: 'Aucune tâche trouvée pour cet utilisateur.',
        editProfile: 'Modifier le profil',
        nickname: 'Surnom',
        talkAboutYourself: 'Parlez-nous de vous',
        role: 'Rôle',
        save: 'Enregistrer les modifications',
        bio: 'Bio',
      },
      dashboard: {
        title: 'Tableau de bord',
        globalView: 'Vue globale',
        users: 'Utilisateurs',
        categories: 'Catégories',
        tasks: 'Tâches',
        comments: 'Commentaires',
        taskStats: 'Statistiques des tâches',
        byStatus: 'Par statut',
        byStatusFrom: 'Par statut du',
        toStatus: 'au',
        byCategories: 'Par catégories',
        top5: 'Top 5 des tâches les plus commentées',
        noPeriod: 'Aucune période sélectionnée',
      },
      categories: {
        research: 'Recherche',
        design: 'Conception',
        development: 'Développement',
        testing: 'Tests',
        deployment: 'Déploiement',
        maintenance: 'Maintenance',
        bug: 'Bug',
        feature: 'Fonctionnalité',
        improvement: 'Amélioration',
        support: 'Support',
        documentation: 'Documentation',
      },
      management: {
        title: 'Gestion des tâches',
        OK: 'Print OK dans la console',
        mockTasks: 'Ajouter des tâches factices en masse',
        deleteAll: 'Supprimer toutes les tâches',
        printCategories: 'Print toutes les catégories',
        printUsers: 'Print tous les utilisateurs',
        printTasks: 'Print toutes les tâches',
        confirmDelete: 'Êtes-vous sûr de vouloir supprimer toutes les tâches ?',
      },
      members: {
        title: 'Membres',
        viewProfile: 'Voir le profil',
        user: 'Utilisateur',
        admin: 'Administrateur',
      },
      status: {
        ALL: 'Tous',
        CANCELLED: 'Annulée',
        TODO: 'À faire',
        DONE: 'Terminé',
        DOING: 'En cours',
      }
    },
    es: {
      confirm: {
        yes: 'Sí',
        no: 'No',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
      },
      home: {
        title: 'POR HACER',
        noTasks: 'No hay tareas disponibles.',
        search: 'Buscar',
        create: 'Crear tarea',
        edit: 'Editar tarea',
        taskTitle: 'Título de la tarea',
        description: 'Descripción',
        deleteTask: 'Eliminar tarea',
        confirmDelete: '¿Estás seguro de que deseas eliminar esta tarea?',
        comments: 'Comentarios',
        add: 'Añadir',
        save: 'Guardar',
      },
      auth: {
        login: {
          title: 'Iniciar sesión',
          email: 'Correo electrónico',
          password: 'Contraseña',
          login: 'Iniciar sesión',
          noAccount: '¿No tienes una cuenta?',
          signUp: 'Regístrate',
          errorMessage: 'Correo electrónico o contraseña incorrectos',
          connectedAs: 'Conectado como',
        },
        signup: {
          title: 'Registrarse',
          email: 'Correo electrónico',
          password: 'Contraseña',
          signUp: 'Registrarse',
          alreadyAccount: '¿Ya tienes una cuenta?',
          login: 'Iniciar sesión',
          errorMessage: 'Ocurrió un error durante el registro',
        },
        logout: {
          logout: 'Cerrar sesión'
        }
      },
      profile: {
        title: 'Perfil',
        email: 'Correo electrónico',
        joined: 'Unido',
        viewAllTasks: 'Ver todas las tareas',
        errorMessage: 'Ocurrió un error durante el guardado',
        noTasks: 'No se encontraron tareas para este usuario.',
        editProfile: 'Editar perfil',
        nickname: 'Apodo',
        talkAboutYourself: 'Cuéntanos sobre ti',
        role: 'Rol',
        save: 'Guardar camtalkAboutYourselfs',
        bio: 'Biografía',
      },
      dashboard: {
        title: 'Panel de control',
        globalView: 'Vista global',
        users: 'Usuarios',
        categories: 'Categorías',
        tasks: 'Tareas',
        comments: 'Comentarios',
        taskStats: 'Estadísticas de tareas',
        byStatus: 'Por estado',
        byStatusFrom: 'Por estado desde',
        toStatus: 'hasta',
        byCategories: 'Por categorías',
        top5: 'Top 5 de tareas más comentadas',
        noPeriod: 'No se ha seleccionado un período',
      },
      categories: {
        research: 'Investigación',
        design: 'Diseño',
        development: 'Desarrollo',
        testing: 'Pruebas',
        deployment: 'Implementación',
        maintenance: 'Mantenimiento',
        bug: 'Error',
        feature: 'Funcionalidad',
        improvement: 'Mejora',
        support: 'Soporte',
        documentation: 'Documentación',
      },
      management: {
        title: 'Gestión de tareas',
        OK: 'Imprimir OK en la consola',
        mockTasks: 'Agregar tareas ficticias en masa',
        deleteAll: 'Eliminar todas las tareas',
        printCategories: 'Imprimir todas las categorías',
        printUsers: 'Imprimir todos los usuarios',
        printTasks: 'Imprimir todas las tareas',
        confirmDelete: '¿Estás seguro de que deseas eliminar todas las tareas?',
      },
      members: {
        title: 'Miembros',
        viewProfile: 'Ver perfil',
        user: 'Usuario',
        admin: 'Administrador',
      },
      status: {
        ALL: 'Todos',
        CANCELLED: 'Cancelada',
        TODO: 'Por hacer',
        DONE: 'Completada',
        DOING: 'En progreso',
      }
    },
    pt: {
      confirm: {
        yes: 'Sim',
        no: 'Não',
        cancel: 'Cancelar',
        confirm: 'Confirmar',
      },
      home: {
        title: 'TODO',
        noTasks: 'Nenhuma tarefa disponível.',
        search: 'Pesquisar',
        create: 'Criar Tarefa',
        edit: 'Editar Tarefa',
        taskTitle: 'Título da Tarefa',
        description: 'Descrição',
        delete: 'Excluir Tarefa',
        confirmDelete: 'Tem certeza de que deseja excluir esta tarefa?',
        comments: 'Comentários',
        add: 'Adicionar',
        save: 'Salvar',
      },
      auth: {
        login: {
          title: 'Entrar',
          email: 'E-mail',
          password: 'Senha',
          login: 'Entrar',
          noAccount: 'Não tem uma conta?',
          signUp: 'Cadastre-se',
          errorMessage: 'E-mail ou senha incorretos',
          connectedAs: 'Conectado como',
        },
        signup: {
          title: 'Cadastrar-se',
          email: 'E-mail',
          password: 'Senha',
          signUp: 'Cadastrar',
          alreadyAccount: 'Já tem uma conta?',
          login: 'Entrar',
          errorMessage: 'Ocorreu um erro durante o registro',
        },
        logout: {
          logout: 'Sair'
        }
      },
      profile: {
        title: 'Perfil',
        email: 'E-mail',
        joined: 'Ingressou',
        viewAllTasks: 'Ver todas as tarefas',
        errorMessage: 'Ocorreu um erro ao salvar',
        noTasks: 'Nenhuma tarefa encontrada para este usuário.',
        editProfile: 'Editar Perfil',
        nickname: 'Apelido',
        talkAboutYourself: 'Conte-nos sobre você',
        role: 'Função',
        save: 'Salvar Alterações',
        bio: 'Biografia',
      },
      dashboard: {
        title: 'Painel',
        globalView: 'Visão Global',
        users: 'Usuários',
        categories: 'Categorias',
        tasks: 'Tarefas',
        comments: 'Comentários',
        taskStats: 'Estatísticas de Tarefas',
        byStatus: 'Por Status',
        byStatusFrom: 'De Status',
        toStatus: 'para',
        byCategories: 'Por Categorias',
        top5: 'Top 5 tarefas mais comentadas',
        noPeriod: 'Nenhum período selecionado',
      },
      categories: {
        research: 'Pesquisa',
        design: 'Design',
        development: 'Desenvolvimento',
        testing: 'Teste',
        deployment: 'Implantação',
        maintenance: 'Manutenção',
        bug: 'Erro',
        feature: 'Funcionalidade',
        improvement: 'Melhoria',
        support: 'Suporte',
        documentation: 'Documentação',
      },
      management: {
        title: 'Gerenciamento de Tarefas',
        OK: 'Imprimir OK no Console',
        mockTasks: 'Adicionar Tarefas Simuladas em Massa',
        deleteAll: 'Excluir Todas as Tarefas',
        printCategories: 'Imprimir Todas as Categorias',
        printUsers: 'Imprimir Todos os Usuários',
        printTasks: 'Imprimir Todas as Tarefas',
        confirmDelete: 'Tem certeza de que deseja excluir todas as tarefas?',
      },
      members: {
        title: 'Membros',
        viewProfile: 'Ver Perfil',
        user: 'Usuário',
        admin: 'Administrador',
      },
      status: {
        ALL: 'Todos',
        CANCELLED: 'Cancelado',
        TODO: 'A Fazer',
        DONE: 'Concluído',
        DOING: 'Em Progresso',
      }
    },
    de: {
      confirm: {
        yes: 'Ja',
        no: 'Nein',
        cancel: 'Abbrechen',
        confirm: 'Bestätigen',
      },
      home: {
        title: 'TODO',
        noTasks: 'Keine Aufgaben verfügbar.',
        search: 'Suchen',
        create: 'Aufgabe Erstellen',
        edit: 'Aufgabe Bearbeiten',
        taskTitle: 'Aufgabentitel',
        description: 'Beschreibung',
        delete: 'Aufgabe Löschen',
        confirmDelete: 'Sind Sie sicher, dass Sie diese Aufgabe löschen möchten?',
        comments: 'Kommentare',
        add: 'Hinzufügen',
        save: 'Speichern',
      },
      auth: {
        login: {
          title: 'Anmelden',
          email: 'E-Mail',
          password: 'Passwort',
          login: 'Anmelden',
          noAccount: 'Kein Konto?',
          signUp: 'Registrieren',
          errorMessage: 'Falsche E-Mail oder falsches Passwort',
          connectedAs: 'Verbunden als',
        },
        signup: {
          title: 'Registrieren',
          email: 'E-Mail',
          password: 'Passwort',
          signUp: 'Registrieren',
          alreadyAccount: 'Haben Sie schon ein Konto?',
          login: 'Anmelden',
          errorMessage: 'Bei der Registrierung ist ein Fehler aufgetreten',
        },
        logout: {
          logout: 'Abmelden'
        }
      },
      profile: {
        title: 'Profil',
        email: 'E-Mail',
        joined: 'Beigetreten',
        viewAllTasks: 'Alle Aufgaben anzeigen',
        errorMessage: 'Beim Speichern ist ein Fehler aufgetreten',
        noTasks: 'Für diesen Benutzer wurden keine Aufgaben gefunden.',
        editProfile: 'Profil Bearbeiten',
        nickname: 'Spitzname',
        talkAboutYourself: 'Erzählen Sie uns etwas über sich',
        role: 'Rolle',
        save: 'Änderungen Speichern',
        bio: 'Biografie',
      },
      dashboard: {
        title: 'Dashboard',
        globalView: 'Gesamtübersicht',
        users: 'Benutzer',
        categories: 'Kategorien',
        tasks: 'Aufgaben',
        comments: 'Kommentare',
        taskStats: 'Aufgabenstatistiken',
        byStatus: 'Nach Status',
        byStatusFrom: 'Von Status',
        toStatus: 'zu',
        byCategories: 'Nach Kategorien',
        top5: 'Top 5 der meistkommentierten Aufgaben',
        noPeriod: 'Kein Zeitraum ausgewählt',
      },
      categories: {
        research: 'Forschung',
        design: 'Design',
        development: 'Entwicklung',
        testing: 'Testen',
        deployment: 'Bereitstellung',
        maintenance: 'Wartung',
        bug: 'Fehler',
        feature: 'Funktion',
        improvement: 'Verbesserung',
        support: 'Unterstützung',
        documentation: 'Dokumentation',
      },
      management: {
        title: 'Aufgabenverwaltung',
        OK: 'OK im Konsole Ausgeben',
        mockTasks: 'Testaufgaben Massenerstellen',
        deleteAll: 'Alle Aufgaben Löschen',
        printCategories: 'Alle Kategorien Ausgeben',
        printUsers: 'Alle Benutzer Ausgeben',
        printTasks: 'Alle Aufgaben Ausgeben',
        confirmDelete: 'Sind Sie sicher, dass Sie alle Aufgaben löschen möchten?',
      },
      members: {
        title: 'Mitglieder',
        viewProfile: 'Profil Anzeigen',
        user: 'Benutzer',
        admin: 'Administrator',
      },
      status: {
        ALL: 'Alle',
        CANCELLED: 'Abgebrochen',
        TODO: 'Zu Erledigen',
        DONE: 'Erledigt',
        DOING: 'In Bearbeitung',
      }
    },
    ru: {
      confirm: {
        yes: 'Да',
        no: 'Нет',
        cancel: 'Отмена',
        confirm: 'Подтвердить',
      },
      home: {
        title: 'TODO',
        noTasks: 'Нет доступных задач.',
        search: 'Поиск',
        create: 'Создать задачу',
        edit: 'Редактировать задачу',
        taskTitle: 'Название задачи',
        description: 'Описание',
        delete: 'Удалить задачу',
        confirmDelete: 'Вы уверены, что хотите удалить эту задачу?',
        comments: 'Комментарии',
        add: 'Добавить',
        save: 'Сохранить',
      },
      auth: {
        login: {
          title: 'Войти',
          email: 'Электронная почта',
          password: 'Пароль',
          login: 'Войти',
          noAccount: 'Нет аккаунта?',
          signUp: 'Зарегистрироваться',
          errorMessage: 'Неверная электронная почта или пароль',
          connectedAs: 'Подключен как',
        },
        signup: {
          title: 'Регистрация',
          email: 'Электронная почта',
          password: 'Пароль',
          signUp: 'Зарегистрироваться',
          alreadyAccount: 'Уже есть аккаунт?',
          login: 'Войти',
          errorMessage: 'Произошла ошибка при регистрации',
        },
        logout: {
          logout: 'Выйти'
        }
      },
      profile: {
        title: 'Профиль',
        email: 'Электронная почта',
        joined: 'Присоединился',
        viewAllTasks: 'Посмотреть все задачи',
        errorMessage: 'Произошла ошибка при сохранении',
        noTasks: 'Для этого пользователя задачи не найдены.',
        editProfile: 'Редактировать профиль',
        nickname: 'Псевдоним',
        talkAboutYourself: 'Расскажите о себе',
        role: 'Роль',
        save: 'Сохранить изменения',
        bio: 'Биография',
      },
      dashboard: {
        title: 'Панель управления',
        globalView: 'Общий обзор',
        users: 'Пользователи',
        categories: 'Категории',
        tasks: 'Задачи',
        comments: 'Комментарии',
        taskStats: 'Статистика задач',
        byStatus: 'По статусу',
        byStatusFrom: 'По статусу от',
        toStatus: 'до',
        byCategories: 'По категориям',
        top5: 'Топ-5 самых комментируемых задач',
        noPeriod: 'Период не выбран',
      },
      categories: {
        research: 'Исследование',
        design: 'Дизайн',
        development: 'Разработка',
        testing: 'Тестирование',
        deployment: 'Развертывание',
        maintenance: 'Обслуживание',
        bug: 'Ошибка',
        feature: 'Функция',
        improvement: 'Улучшение',
        support: 'Поддержка',
        documentation: 'Документация',
      },
      management: {
        title: 'Управление задачами',
        OK: 'Вывести OK в консоль',
        mockTasks: 'Добавить тестовые задачи оптом',
        deleteAll: 'Удалить все задачи',
        printCategories: 'Вывести все категории',
        printUsers: 'Вывести всех пользователей',
        printTasks: 'Вывести все задачи',
        confirmDelete: 'Вы уверены, что хотите удалить все задачи?',
      },
      members: {
        title: 'Участники',
        viewProfile: 'Посмотреть профиль',
        user: 'Пользователь',
        admin: 'Администратор',
      },
      status: {
        ALL: 'Все',
        CANCELLED: 'Отменено',
        TODO: 'К выполнению',
        DONE: 'Выполнено',
        DOING: 'В процессе',
      }
    },
    ja: {
      confirm: {
        yes: 'はい',
        no: 'いいえ',
        cancel: 'キャンセル',
        confirm: '確認',
      },
      home: {
        title: 'TODO',
        noTasks: 'タスクがありません。',
        search: '検索',
        create: 'タスクを作成',
        edit: 'タスクを編集',
        taskTitle: 'タスクのタイトル',
        description: '説明',
        delete: 'タスクを削除',
        confirmDelete: 'このタスクを削除してもよろしいですか？',
        comments: 'コメント',
        add: '追加',
        save: '保存',
      },
      auth: {
        login: {
          title: 'ログイン',
          email: 'メールアドレス',
          password: 'パスワード',
          login: 'ログイン',
          noAccount: 'アカウントをお持ちでないですか？',
          signUp: '登録する',
          errorMessage: 'メールアドレスまたはパスワードが間違っています',
          connectedAs: '接続中',
        },
        signup: {
          title: '登録',
          email: 'メールアドレス',
          password: 'パスワード',
          signUp: '登録',
          alreadyAccount: 'すでにアカウントをお持ちですか？',
          login: 'ログイン',
          errorMessage: '登録中にエラーが発生しました',
        },
        logout: {
          logout: 'ログアウト'
        }
      },
      profile: {
        title: 'プロフィール',
        email: 'メールアドレス',
        joined: '参加日',
        viewAllTasks: 'すべてのタスクを見る',
        errorMessage: '保存中にエラーが発生しました',
        noTasks: 'このユーザーにはタスクが見つかりません。',
        editProfile: 'プロフィールを編集',
        nickname: 'ニックネーム',
        talkAboutYourself: '自己紹介',
        role: '役割',
        save: '変更を保存',
        bio: '自己紹介',
      },
      dashboard: {
        title: 'ダッシュボード',
        globalView: '全体ビュー',
        users: 'ユーザー',
        categories: 'カテゴリ',
        tasks: 'タスク',
        comments: 'コメント',
        taskStats: 'タスク統計',
        byStatus: 'ステータス別',
        byStatusFrom: 'ステータス別（開始日：',
        toStatus: '終了日：',
        byCategories: 'カテゴリ別',
        top5: '最もコメントされたタスクトップ5',
        noPeriod: '期間が選択されていません',
      },
      categories: {
        research: 'リサーチ',
        design: 'デザイン',
        development: '開発',
        testing: 'テスト',
        deployment: 'デプロイ',
        maintenance: 'メンテナンス',
        bug: 'バグ',
        feature: '機能',
        improvement: '改善',
        support: 'サポート',
        documentation: 'ドキュメント',
      },
      management: {
        title: 'タスク管理',
        OK: 'OKをコンソールに出力',
        mockTasks: 'テスト用タスクを一括追加',
        deleteAll: 'すべてのタスクを削除',
        printCategories: 'すべてのカテゴリを出力',
        printUsers: 'すべてのユーザーを出力',
        printTasks: 'すべてのタスクを出力',
        confirmDelete: 'すべてのタスクを削除してもよろしいですか？',
      },
      members: {
        title: 'メンバー',
        viewProfile: 'プロフィールを見る',
        user: 'ユーザー',
        admin: '管理者',
      },
      status: {
        ALL: 'すべて',
        CANCELLED: 'キャンセル済み',
        TODO: '未完了',
        DONE: '完了',
        DOING: '進行中',
      }
    },
    kr: {
      confirm: {
        yes: '예',
        no: '아니오',
        cancel: '취소',
        confirm: '확인',
      },
      home: {
        title: 'TODO',
        noTasks: '할 일이 없습니다.',
        search: '검색',
        create: '할 일 만들기',
        edit: '할 일 수정',
        taskTitle: '할 일 제목',
        description: '설명',
        delete: '할 일 삭제',
        confirmDelete: '이 할 일을 삭제하시겠습니까?',
        comments: '댓글',
        add: '추가',
        save: '저장',
      },
      auth: {
        login: {
          title: '로그인',
          email: '이메일',
          password: '비밀번호',
          login: '로그인',
          noAccount: '계정이 없으신가요?',
          signUp: '가입하기',
          errorMessage: '이메일 또는 비밀번호가 올바르지 않습니다.',
          connectedAs: '로그인한 사용자',
        },
        signup: {
          title: '회원가입',
          email: '이메일',
          password: '비밀번호',
          signUp: '회원가입',
          alreadyAccount: '이미 계정이 있으신가요?',
          login: '로그인',
          errorMessage: '회원가입 중 오류가 발생했습니다.',
        },
        logout: {
          logout: '로그아웃'
        }
      },
      profile: {
        title: '프로필',
        email: '이메일',
        joined: '가입일',
        viewAllTasks: '모든 할 일 보기',
        errorMessage: '저장 중 오류가 발생했습니다.',
        noTasks: '이 사용자에게 할 일이 없습니다.',
        editProfile: '프로필 수정',
        nickname: '닉네임',
        talkAboutYourself: '자기소개',
        role: '역할',
        save: '변경사항 저장',
        bio: '소개',
      },
      dashboard: {
        title: '대시보드',
        globalView: '전체 보기',
        users: '사용자',
        categories: '카테고리',
        tasks: '할 일',
        comments: '댓글',
        taskStats: '할 일 통계',
        byStatus: '상태별',
        byStatusFrom: '상태별 (시작일',
        toStatus: '종료일',
        byCategories: '카테고리별',
        top5: '가장 댓글이 많은 상위 5개 할 일',
        noPeriod: '기간이 선택되지 않았습니다.',
      },
      categories: {
        research: '연구',
        design: '디자인',
        development: '개발',
        testing: '테스트',
        deployment: '배포',
        maintenance: '유지보수',
        bug: '버그',
        feature: '기능',
        improvement: '개선',
        support: '지원',
        documentation: '문서',
      },
      management: {
        title: '할 일 관리',
        OK: '콘솔에 OK 출력',
        mockTasks: '모의 할 일 대량 추가',
        deleteAll: '모든 할 일 삭제',
        printCategories: '모든 카테고리 출력',
        printUsers: '모든 사용자 출력',
        printTasks: '모든 할 일 출력',
        confirmDelete: '모든 할 일을 삭제하시겠습니까?',
      },
      members: {
        title: '회원',
        viewProfile: '프로필 보기',
        user: '사용자',
        admin: '관리자',
      },
      status: {
        ALL: '모두',
        CANCELLED: '취소됨',
        TODO: '할 일',
        DONE: '완료됨',
        DOING: '진행 중',
      }
    },
};