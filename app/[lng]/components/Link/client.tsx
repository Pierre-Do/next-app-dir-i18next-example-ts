'use client'

import { LinkBase } from './LinkBase'
import { useT } from '../../../i18n/client'
import {Route} from "next";

export function Link<T extends string>({ href, children }: {
  href?: Route<T>;
  children?: React.ReactNode;
}) {
  const { i18n } = useT()
  return <LinkBase lng={i18n.resolvedLanguage} href={href}>{children}</LinkBase>
}
