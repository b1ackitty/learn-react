/* eslint-disable react-refresh/only-export-components */
import { AuthError, Session, User } from '@supabase/supabase-js'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { toast } from 'sonner'
import supabase from '@/libs/supabase'

// 인증 컨텍스트에서 제공할 값들의 타입 정의
interface AuthContextType {
  user: User | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
  signUp: (
    email: string,
    password: string,
    username: string
  ) => Promise<{ error: AuthError | null }>
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<{ error: AuthError | null }>
}

// 컨텍스트 기본값 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider Props 타입 정의
interface AuthProviderProps {
  children: ReactNode
}

// AuthProvider 컴포넌트 구현
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 인증 상태가 있는지 계산된 값
  const isAuthenticated = useMemo(() => !!user, [user])

  useEffect(() => {
    // 초기 사용자 세션 가져오기
    const getInitialSession = async () => {
      try {
        setIsLoading(true)

        // 현재 세션 가져오기
        const {
          data: { session },
        } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
      } catch (error) {
        console.error('세션 가져오기 오류:', error)
        toast.error('인증 정보를 가져오는 중 문제가 발생했습니다')
      } finally {
        setIsLoading(false)
      }
    }

    getInitialSession()

    // 인증 상태 변경 리스너
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  // 회원가입 함수
  const signUp = async (email: string, password: string, username: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username },
        },
      })

      if (!error) {
        toast.success('회원가입이 성공적으로 완료되었습니다!')
      }

      return { error }
    } catch (error) {
      console.error('회원가입 오류:', error)
      toast.error('회원가입 중 문제가 발생했습니다')
      return { error: error as AuthError }
    }
  }

  // 로그인 함수
  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (!error) {
        toast.success('로그인에 성공했습니다!')
      }

      return { error }
    } catch (error) {
      console.error('로그인 오류:', error)
      toast.error('로그인 중 문제가 발생했습니다')
      return { error: error as AuthError }
    }
  }

  // 로그아웃 함수
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (!error) {
        toast.success('로그아웃 되었습니다')
      }

      return { error }
    } catch (error) {
      console.error('로그아웃 오류:', error)
      toast.error('로그아웃 중 문제가 발생했습니다')
      return { error: error as AuthError }
    }
  }

  // 컨텍스트 값
  const value = {
    user,
    session,
    isLoading,
    isAuthenticated,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// 커스텀 훅
export function useAuth() {
  const contextValue = useContext(AuthContext)

  if (contextValue === undefined) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용해야 합니다.')
  }

  return contextValue
}
