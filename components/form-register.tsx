'use client'

import { LogIn } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

const FormRegister = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full max-w-[400px] flex-col gap-4 rounded-lg bg-white sm:border-2 sm:border-border sm:px-8 sm:py-16',
      className
    )}
    {...props}
  >
    <div>
      <Label className="font-semibold">Nome completo</Label>
      <Input
        type="email"
        placeholder="Qual seu nome do RG? 📜"
        className="h-12 ring-offset-primary"
      />
    </div>
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
        placeholder="Sua senha secreta 👩‍💻"
        className="h-12 ring-offset-primary"
      />
    </div>
    <div>
      <Label className="font-semibold">Confirmação de senha</Label>
      <Input
        type="password"
        placeholder="Confirme sua senha secreta 👨‍💻"
        className="h-12 ring-offset-primary"
      />
    </div>
    <Link href="/recuperar-senha" className="w-fit">
      <span className="text-sm font-semibold italic text-primary">
        Esqueceu a senha?
      </span>
    </Link>
    <div>
      <Button
        className="flex h-12 w-full flex-row gap-2"
        onClick={() => {
          console.log('Teste')
        }}
      >
        Criar conta
        <LogIn />
      </Button>
    </div>
    <Link href="/" className="w-fit">
      <span className="text-sm font-semibold">
        Já tem uma conta?
        <span className="italic text-primary">Faça login!</span>
      </span>
    </Link>
  </div>
))
FormRegister.displayName = 'FormRegister'

export { FormRegister }
