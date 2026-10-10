"""Create a portable archive from reviewed sources and public files only."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import json
from public_inventory import SOURCE

ROOT=Path(__file__).resolve().parent.parent
archive=ROOT/'NeuroVinculos_FocoClaro_v1.2_COMPLETO.zip'
if archive.exists(): raise SystemExit('Arquivo já existe. Preservar ou escolher nova versão antes de empacotar.')
with ZipFile(archive,'w',ZIP_DEFLATED) as z:
    for relative in SOURCE:
        z.write(ROOT/relative,'fonte/'+relative)
    for p in sorted((ROOT/'dist').rglob('*')):
        if p.is_file(): z.write(p,'site/'+str(p.relative_to(ROOT/'dist')))
with ZipFile(archive) as z:
    assert not any('SCMS' in name or name.startswith(('backups/','.qa/')) or '._' in name for name in z.namelist())
print(json.dumps({'archive':str(archive),'bytes':archive.stat().st_size,'sha256':hashlib.sha256(archive.read_bytes()).hexdigest()},ensure_ascii=False))
