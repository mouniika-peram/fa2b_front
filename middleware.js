import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


let locales =['en', 'es', 'de']
let defaultLocale = 'en'

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
    const negotiatorHeaders = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages()
    const locale = match(languages, locales, defaultLocale)
    return locale
}
export function middleware(request) {
    // Check if there is any supported locale in the pathname  
    const pathname = request.nextUrl.pathname
    const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)
    console.log("pathnameIsMissingLocale")

    console.log(pathname)


    console.log(pathnameIsMissingLocale)



    // Redirect if there is no locale  
    if (pathnameIsMissingLocale) { const locale = getLocale(request)
         // e.g. incoming request is /products   
        // The new URL is now /en-US/products   
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
} export const config = { matcher: [
    // Skip all internal paths (_next) 
    // '/((?!_next).*)',  
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL    // '/' 
],
}

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
// In Next js 12 locales automatically given by nextjs but in next13 we need to implement the locale using using above functions
