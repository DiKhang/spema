import auth from '@react-native-firebase/auth';

interface Action {
  errorHandle?: (error?: any) => void;
  successHandle?: (user?: any) => void;
}

interface Authentication {
  email: string;
  password: string;
  actions?: Action;
}

const login = async (props: Authentication) => {
  const {email, password, actions} = props;

  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      //handle Success
      actions && actions.successHandle && actions.successHandle(user);
    })
    .catch((error: any) => {
      //handle Error
      actions && actions.errorHandle && actions.errorHandle(error);
    });
};

const register = async (props: Authentication) => {
  const {email, password, actions} = props;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      //handle Success
      actions && actions.successHandle && actions.successHandle(user);
    })
    .catch((error: any) => {
      //handle Error
      actions && actions.errorHandle && actions.errorHandle(error);
    });
};

const authGuard = async (actions: Action) => {
  auth().onAuthStateChanged(user => {
    if (user) {
      actions && actions.successHandle && actions.successHandle(user);
    } else {
      actions && actions.errorHandle && actions.errorHandle();
    }
  });
};

const logout = async () => {
  await auth().signOut();
};

export {login, register, authGuard, logout};
