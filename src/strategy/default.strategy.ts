import { WhoisStrategy } from '../whois/whois.strategy.interface';

export class DefaultStrategy implements WhoisStrategy {
  isPremium(domain: string, whois: string[]): boolean {
    const searchStrings = [
      'This premium domain is available for purchase. If you would like to make an offer, please contact platinums@donuts.email.',
    ];

    return searchStrings.some(searchString => whois.includes(searchString));
  }

  isRegistered(domain: string, whois: string[]): boolean {
    const searchStrings = [
      `^${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\s-\\sNo\\sMatch$`,
      `^${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\sis\\sfree$`,
      `^${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}:\\sno\\sentries\\sfound\\.?$`,
      `^%\\sNo\\sentries\\sfound\\sfor\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`,
      `^%\\sNo\\sentries\\sfound\\sfor\\query\\s"${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}"`,
      `^(?:%\\sNo|No)\\sentries\\sfound\\s(?:for|in)\\sthe\\sselected\\s(?:source|source\\(s\\))\\.?$`,
      `^(?:%\\sNo|No)\\s(?:entries|match|such)\\s(?:for|found|domain)\\.?$`,
      `^(?:%\\sNo|No)\\s(?:entries|match|such)\\s(?:for|found|domain)\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\.?$`,
      `^(?:%\\sNo|No)\\s(?:entries|match)\\sfound\\sfor\\squery\\s"${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}"\\.?$`,
      `^(?:%\\sNo|No)\\s(?:match|match!!)\\.?$`,
      `^%\\snothing\\sfound$`,
      `^(?:%%\\sNOT|NOT)\\sFOUND\\.?$`,
      `^(?:%%\\sNo|No)\\sentries found in the AFNIC Database\\.?$`,
      `^%ERROR(?::101:|:103:|:)\\s(?:No\\sentries\\sfound|no\\sentries\\sfound|Domain\\sis\\snot\\sregistered)$`,
      `^\\*{3}\\sNothing\\sfound\\sfor\\sthis\\squery\\.?$`,
      `^1:\\sThis\\sdomain\\sname\\scan\\sbe\\sregistered\\.?$`,
      `^>{3}\\sDomain\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\sis\\savailable\\sfor\\sregistration$`,
      `^Available$`,
      `^Domain\\sStatus:\\s(?:No\\sObject\\sFound|Not\\sFound|free)$`,
      `^(?:DOMAIN|Domain|domain)\\s(?:NOT|Not|not)\\s(?:FOUND|Found|found)\\.?$`,
      `^Invalid\\squery\\sor\\sdomain\\sname\\snot\\sknown\\sin\\s(?:Dot|Point)\\s(?:TK|ML)\\sDomain\\sRegistry\\.?$`,
      `^Nincs\\stalalat\\s\\/\\sNo\\smatch$`,
      `^No\\sData\\sFound\\.?$`,
      `^No\\sFound\\.?$`,
      `^No\\sentries\\sfound\\.?$`,
      `^No\\sentries\\sfound\\sfor\\sdomain\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`,
      `^No\\sinformation\\savailable\\sabout\\sdomain\\sname\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\sin\\sthe\\sRegistry\\sNASK\\sdatabase\\.?$`,
      `^No\\smatch\\sfor\\s"${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toUpperCase()}"\\.?$`,
      `^No\\smatch\\sfor\\s${domain.substring(0, domain.lastIndexOf('.')).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`,
      `^No\\smatch\\sfor\\sdomain\\s"${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').toUpperCase()}"\\.?$`,
      `^No\\smatching\\srecord\\.?$`,
      `^No_Se_Encontro_El_Objeto\\/Object_Not_Found$`,
      `^Not\\sfound:\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}$`,
      `^Status:\\s(?:AVAILABLE|Available|available|FREE|Free|free)\.?$`,
      `^The\\sdomain\\s${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\swas\\snot\\sfound\\.?$`,
      `^The\\sdomain\\shas\\snot\\sbeen\\sregistered\\.?$`,
      `^This\\sdomain\\sname\\shas\\snot\\sbeen\\sregistered\\.?$`,
      `^The\\squeried\\sobject\\sdoes\\snot\\sexist\\.?$`,
      `^The\\squeried\\sobject\\sdoes\\snot\\sexist:\\s(?:(?:DOMAIN|Domain|domain)\\s(?:NOT|Not|not)\\s(?:FOUND|Found|found).?|no\\smatching\\sobjects\\sfound.?|${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}.?)$`,
      `^The\\srequested\\sdomain\\swas\\snot\\sfound\\sin\\sthe\\sRegistry\\sor\\sRegistrar’s\\sWHOIS\\sServer\\.?$`,
      `^domain\\s"${domain.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}"\\snot\\sfound\\.?$`,
      `^query_status:\\s220\\sAvailable$`,
      `^registration\\sstatus:\\savailable$`,
    ];

    return !searchStrings.some(searchString => whois.some((line) => new RegExp(searchString).test(line)));
    // return !searchStrings.some(searchString => whois.includes(searchString));
  }

  isReserved(domain: string, whois: string[]): boolean {
    const searchStrings = [
      'Reserved Domain Name',
      'has been reserved',
      'Reserved name',
      'Reserved by',
      'reserved by', // This name is reserved by
    ];

    return searchStrings.some(searchString => whois.includes(searchString));
  }
}
