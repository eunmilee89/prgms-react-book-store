import { login, resetPassword, resetRequest, signup } from '@/api/auth.api';
import { LoginProps } from '@/pages/Login';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
import { useAlert } from './useAlert';
import { SignUpProps } from '@/pages/Signup';
import { useState } from 'react';

export const useAuth = () => {
  const { storeLogin, storeLogout, isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const userLogin = (data: LoginProps) => {
    login(data).then(
      (res) => {
        storeLogin(res.token);
        showAlert('로그인이 완료되었습니다.');
        navigate('/');
      },
      (error) => {
        showAlert('로그인에 실패하였습니다.');
      }
    );
  };

  const userSignup = (data: SignUpProps) => {
    signup(data).then((data) => {
      showAlert('회원가입이 완료되었습니다.');
      navigate('/login');
    });
  };

  const userResetPassword = (data: SignUpProps) => {
    resetPassword(data).then(() => {
      showAlert('비밀번호가 초기화되었습니다.');
      navigate('/login');
    });
  };

  const [resetRequested, setResetRequested] = useState(false);

  const userResetRequest = (data: SignUpProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  return {
    userLogin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
