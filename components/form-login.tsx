'use client'

import { LogIn } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const FormLogin = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full max-w-[375px] flex-col gap-5 rounded-lg bg-white sm:border-2 sm:border-border sm:px-8 sm:py-16',
      className
    )}
    {...props}
  >
    <div>
      <Label className="font-semibold">E-mail</Label>
      <Input
        type="email"
        placeholder="Seu melhor e-mail 📧"
        className="h-12 ring-offset-primary"
      />
    </div>
    <div>
      <Label className="font-semibold">Senha</Label>
      <Input
        type="password"
        placeholder="Sua senha secreta 🕵️"
        className="h-12 ring-offset-primary"
      />
    </div>
    <Link href="/recuperar-senha" className="w-fit">
      <span className="text-sm font-semibold italic text-primary">
        Esqueceu a senha?
      </span>
    </Link>
    <div>
      <Link href="/dashboard">
        <Button className="flex h-12 w-full flex-row gap-2">
          Entrar
          <LogIn />
        </Button>
      </Link>
    </div>
    <Link href="/registro" className="w-fit">
      <span className="text-sm font-semibold">
        Ainda não é cadastrado?
        <span className="italic text-primary">Crie uma conta!</span>
      </span>
    </Link>
  </div>
))

FormLogin.displayName = 'FormLogin'

export { FormLogin }
