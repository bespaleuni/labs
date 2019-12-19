import re


def file_regexp(filename, reg_e):
    with open(filename) as f:
        file = f.readlines()

        for s in file:
            if re.findall(reg_e, s):
                print(s, end='')


# %% 9.1a

reg = r'Ethernet0/[13]'

file_regexp('sh_ip_int_br.txt', reg)

# %% 9.1b

reg = r'0/[13]'

file_regexp('sh_ip_int_br.txt', reg)

# %% 9.1c

reg = r'/[13]'

file_regexp('sh_ip_int_br.txt', reg)

