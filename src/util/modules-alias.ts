import * as path from 'path';
import modulesAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

modulesAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
});
